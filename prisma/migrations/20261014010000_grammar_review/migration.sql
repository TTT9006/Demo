CREATE TABLE "GrammarExerciseProgress" (
 "id" TEXT NOT NULL PRIMARY KEY, "userId" TEXT NOT NULL, "grammarId" TEXT NOT NULL, "exerciseId" TEXT NOT NULL,
 "attempts" INTEGER NOT NULL DEFAULT 0, "correctCount" INTEGER NOT NULL DEFAULT 0, "lastCorrect" BOOLEAN NOT NULL DEFAULT false,
 "ease" REAL NOT NULL DEFAULT 2.5, "interval" INTEGER NOT NULL DEFAULT 0, "repetitions" INTEGER NOT NULL DEFAULT 0,
 "due" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, "lastReviewed" DATETIME,
 FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE,
 FOREIGN KEY ("grammarId") REFERENCES "Grammar"("id") ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE UNIQUE INDEX "GrammarExerciseProgress_userId_grammarId_exerciseId_key" ON "GrammarExerciseProgress"("userId","grammarId","exerciseId");
CREATE INDEX "GrammarExerciseProgress_userId_due_idx" ON "GrammarExerciseProgress"("userId","due");
CREATE TABLE "GrammarAnswer" (
 "id" TEXT NOT NULL PRIMARY KEY, "userId" TEXT NOT NULL, "grammarId" TEXT NOT NULL, "exerciseId" TEXT NOT NULL,
 "answer" TEXT NOT NULL, "correct" BOOLEAN NOT NULL, "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
 FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE,
 FOREIGN KEY ("grammarId") REFERENCES "Grammar"("id") ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE INDEX "GrammarAnswer_userId_createdAt_idx" ON "GrammarAnswer"("userId","createdAt");
