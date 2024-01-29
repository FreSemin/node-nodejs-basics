import { createReadStream } from 'node:fs';
import { getDirNameFromUrl } from '../utils/path.utils.js';
import * as path from 'path';

const scriptDir = getDirNameFromUrl(import.meta.url);
const fileForRead = path.join(scriptDir, 'files', 'fileToRead.txt');

const read = async () => {
    try {
        const fileStream = createReadStream(fileForRead, { encoding: 'UTF-8', });

        fileStream.pipe(process.stdout);
    } catch (error) {
        throw error;
    }
};

await read();