import { existsSync, copyFileSync, mkdirSync, closeSync, openSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
// Make the standard setup command work without a manual environment-file copy.
if (!existsSync('.env')) copyFileSync('.env.example', '.env');
mkdirSync('prisma', { recursive: true });
if (!existsSync('prisma/learning.db')) closeSync(openSync('prisma/learning.db', 'a'));
for (const args of [
  ['node_modules/prisma/build/index.js', 'generate'],
  ['node_modules/prisma/build/index.js', 'migrate', 'deploy'],
  ['node_modules/tsx/dist/cli.mjs', 'prisma/seed.ts'],
]) {
  const result = spawnSync(process.execPath, args, { stdio: 'inherit', env: process.env });
  if (result.status !== 0) process.exit(result.status || 1);
}
