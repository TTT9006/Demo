import { spawn } from 'node:child_process';
const child = spawn(process.execPath, ['dist-api/server.js'], {
  stdio: 'inherit',
  env: { ...process.env, NODE_ENV: 'production' },
});
child.on('exit', (code) => process.exit(code || 0));
