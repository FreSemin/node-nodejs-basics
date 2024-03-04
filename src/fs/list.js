import { readdir } from 'node:fs/promises';
import FsOperationFailedError from '../utils/fs-operation-failed.error.js';
import { getDirNameFromUrl } from '../utils/path.utils.js';
import * as path from 'path';

const scriptDir = getDirNameFromUrl(import.meta.url);
const sourceDir = path.join(scriptDir, 'files');

const list = async () => {
    await readdir(sourceDir)
        .then((files) => {
            files.forEach((file) => {
                console.log(file);
            });
        })
        .catch(() => {
            throw new FsOperationFailedError();
        });
};

await list();