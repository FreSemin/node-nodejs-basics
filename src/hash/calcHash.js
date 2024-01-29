import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';
import { getDirNameFromUrl } from '../utils/path.utils.js';
import * as path from 'path';

const scriptDir = getDirNameFromUrl(import.meta.url);
const fileForHash = path.join(scriptDir, 'files', 'fileToCalculateHashFor.txt');

const hash = createHash('sha256');

const calculateHash = async () => {
    const fileStream = createReadStream(fileForHash, { encoding: 'UTF-8', });

    fileStream.on('data', (chunk) => {
        hash.update(chunk);
    });

    fileStream.on('end', () => {
        console.log(`SHA256 ${hash.digest('hex')}`);
    });

    fileStream.on('error', (error) => {
        throw error;
    });
};

await calculateHash();