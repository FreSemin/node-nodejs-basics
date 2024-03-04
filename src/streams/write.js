import { createWriteStream } from 'node:fs';
import { getDirNameFromUrl } from '../utils/path.utils.js';
import * as path from 'path';

const scriptDir = getDirNameFromUrl(import.meta.url);
const fileToWrite = path.join(scriptDir, 'files', 'fileToWrite.txt');

const write = async () => {
    try {
        const fileWriteStream = createWriteStream(fileToWrite, { encoding: 'UTF-8', });

        process.stdin.pipe(fileWriteStream);
    } catch (error) {
        throw error;
    }
};

await write();