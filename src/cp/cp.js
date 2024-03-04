import { spawn } from 'child_process';
import { getDirNameFromUrl } from '../utils/path.utils.js';
import * as path from 'path';

const scriptDir = getDirNameFromUrl(import.meta.url);
const childFile = path.join(scriptDir, 'files', 'script.js');

const spawnChildProcess = async (args) => {
    const child = spawn('node', [childFile, ...args]);

    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);
};

spawnChildProcess(['arg', 'text', 'str']);