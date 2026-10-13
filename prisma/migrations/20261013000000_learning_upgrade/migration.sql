ALTER TABLE "User" ADD COLUMN "annotationMode" TEXT NOT NULL DEFAULT 'japanese';
ALTER TABLE "Card" ADD COLUMN "materialType" TEXT NOT NULL DEFAULT 'vocabulary';
ALTER TABLE "Card" ADD COLUMN "radicalId" INTEGER;
CREATE UNIQUE INDEX "Card_deckId_radicalId_key" ON "Card"("deckId", "radicalId");
CREATE TABLE "RadicalProgress" (
  "userId" TEXT NOT NULL,
  "radicalId" INTEGER NOT NULL,
  "completed" BOOLEAN NOT NULL DEFAULT false,
  "updatedAt" DATETIME NOT NULL,
  PRIMARY KEY ("userId", "radicalId"),
  FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE "DictionarySearchTerm" (
  "entryId" TEXT NOT NULL,
  "kind" TEXT NOT NULL,
  "term" TEXT NOT NULL,
  PRIMARY KEY ("entryId", "kind", "term"),
  FOREIGN KEY ("entryId") REFERENCES "DictionaryEntry"("id") ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE INDEX "DictionarySearchTerm_kind_term" ON "DictionarySearchTerm"("kind", "term", "entryId");
CREATE TABLE "SearchIndexVersion" ("id" TEXT PRIMARY KEY, "version" TEXT NOT NULL, "updatedAt" DATETIME NOT NULL);
