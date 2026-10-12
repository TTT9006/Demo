$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath $PSScriptRoot
$taskNode = Get-Command node -ErrorAction SilentlyContinue
if (-not $taskNode) {
    $taskBundledNode = Join-Path $env:USERPROFILE '.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe'
    if (-not (Test-Path -LiteralPath $taskBundledNode)) { throw 'Install Node.js 24 or newer, then run npm install, npm run db:setup, and npm run dev.' }
    $env:PATH = (Split-Path -Parent $taskBundledNode) + ';' + $env:PATH
}
$taskNpm = Get-Command npm -ErrorAction SilentlyContinue
if ($taskNpm) { & $taskNpm.Source run dev }
elseif (Test-Path -LiteralPath '.tools/npm/bin/npm-cli.js') { & node '.tools/npm/bin/npm-cli.js' run dev }
else { throw 'Install npm and run npm run dev from this folder.' }
