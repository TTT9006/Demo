CREATE TABLE "UserPasswordCredential" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "userId" TEXT NOT NULL,
  "password" TEXT NOT NULL,
  FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE UNIQUE INDEX "UserPasswordCredential_userId_password_key" ON "UserPasswordCredential"("userId", "password");
CREATE TABLE "AccountImport" (
  "source" TEXT NOT NULL PRIMARY KEY,
  "completedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
