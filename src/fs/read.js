import { readFile } from 'node:fs/promises';
import FsOperationFailedError from '../utils/fs-operation-failed.error.js';
import { getDirNameFromUrl } from '../utils/path.utils.js';
import * as path from 'path';

const scriptDir = getDirNameFromUrl(import.meta.url);
const fileToRead = path.join(scriptDir, 'files', 'fileToRead.txt');

const read = async () => {
    await readFile(fileToRead, { encoding: 'utf8' })
        .then((content) => {
            console.log(content);
        })
        .catch(() => {
            throw new FsOperationFailedError();
        });
};

await read();