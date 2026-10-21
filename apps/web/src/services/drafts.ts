export type WritingDraft = {
  alphabet: string;
  character: string;
  strokes: { x: number; y: number }[][];
  guide: boolean;
};

// Store learning drafts only. Passwords and session tokens stay out of IndexedDB.
let connection: Promise<IDBDatabase> | undefined;
function openDrafts() {
  return connection ??= new Promise<IDBDatabase>((resolve, reject) => {
    const request = indexedDB.open('wakaba-drafts', 1);
    request.onupgradeneeded = () => request.result.createObjectStore('writing');
    request.onerror = () => { connection = undefined; reject(request.error); };
    request.onblocked = () => { connection = undefined; reject(new Error('Kho bản nháp đang bận.')); };
    request.onsuccess = () => {
      const db = request.result;
      db.onversionchange = () => { db.close(); connection = undefined; };
      resolve(db);
    };
  });
}

export async function loadWritingDraft(userId: string): Promise<WritingDraft | undefined> {
  const db = await openDrafts();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction('writing', 'readonly');
    const request = transaction.objectStore('writing').get(userId);
    transaction.oncomplete = () => resolve(request.result as WritingDraft | undefined);
    transaction.onabort = () => reject(transaction.error);
    transaction.onerror = () => reject(transaction.error);
  });
}

export async function saveWritingDraft(userId: string, draft: WritingDraft) {
  const db = await openDrafts();
  return new Promise<void>((resolve, reject) => {
    const transaction = db.transaction('writing', 'readwrite');
    transaction.objectStore('writing').put(draft, userId);
    transaction.oncomplete = () => resolve();
    transaction.onabort = () => reject(transaction.error);
    transaction.onerror = () => reject(transaction.error);
  });
}
