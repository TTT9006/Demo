CREATE INDEX "DictionaryKanji_entryId_idx" ON "DictionaryKanji"("entryId");
CREATE INDEX "DictionaryReading_entryId_idx" ON "DictionaryReading"("entryId");
CREATE INDEX "DictionarySense_entryId_idx" ON "DictionarySense"("entryId");
CREATE INDEX "DictionaryGloss_senseId_idx" ON "DictionaryGloss"("senseId");
CREATE VIRTUAL TABLE IF NOT EXISTS DictionaryFts USING fts5(entryId UNINDEXED, japanese, english, vietnamese, tokenize='unicode61 remove_diacritics 2');
CREATE VIRTUAL TABLE IF NOT EXISTS DictionaryTrigram USING fts5(entryId UNINDEXED, content, tokenize='trigram');
CREATE TABLE IF NOT EXISTS DictionaryGram (token TEXT NOT NULL, entryId TEXT NOT NULL, PRIMARY KEY(token, entryId));
CREATE INDEX IF NOT EXISTS DictionaryGram_entry ON DictionaryGram(entryId);
