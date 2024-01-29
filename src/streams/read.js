import { createReadStream } from 'node:fs';
import { getDirNameFromUrl } from '../utils/path.utils.js';
import * as path from 'path';

const scriptDir = getDirNameFromUrl(import.meta.url);
const FileForRead = path.join(scriptDir, 'files', 'fileToRead.txt');

const read = async () => {
    const fileStream = createReadStream(FileForRead, { encoding: 'UTF-8', });

    fileStream.on('data', (chunk) => {
        process.stdout.write(chunk);
    });

    fileStream.on('error', (error) => {
        throw error;
    });
};

await read();