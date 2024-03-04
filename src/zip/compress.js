import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';
import { getDirNameFromUrl } from '../utils/path.utils.js';
import * as path from 'path';

const scriptDir = getDirNameFromUrl(import.meta.url);
const fileForCompression = path.join(scriptDir, 'files', 'fileToCompress.txt');
const fileDestinationArchive = path.join(scriptDir, 'files', 'archive.gz');

const compress = async () => {
    try {
        const gzip = createGzip();

        const fileSource = createReadStream(fileForCompression);

        const fileDestination = createWriteStream(fileDestinationArchive);

        fileSource.pipe(gzip).pipe(fileDestination);
    } catch (error) {
        throw error;
    }
};

await compress();