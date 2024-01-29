import { createReadStream, createWriteStream } from 'node:fs';
import { createUnzip } from 'node:zlib';
import { getDirNameFromUrl } from '../utils/path.utils.js';
import * as path from 'path';

const scriptDir = getDirNameFromUrl(import.meta.url);
const archiveForUnzip = path.join(scriptDir, 'files', 'archive.gz',);
const fileDestination = path.join(scriptDir, 'files', 'fileToCompress.txt');

const decompress = async () => {
    try {
        const unzip = createUnzip();

        const archiveSource = createReadStream(archiveForUnzip);

        const fileDestinationStream = createWriteStream(fileDestination);

        archiveSource.pipe(unzip).pipe(fileDestinationStream);
    } catch (error) {
        throw error;
    }
};

await decompress();