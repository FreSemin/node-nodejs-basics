import { rm } from 'node:fs/promises';
import FsOperationFailedError from '../utils/fs-operation-failed.error.js';
import { getDirNameFromUrl } from '../utils/path.utils.js';
import * as path from 'path';

const scriptDir = getDirNameFromUrl(import.meta.url);
const fileToRemove = path.join(scriptDir, 'files', 'fileToRemove.txt');

const remove = async () => {
    await rm(fileToRemove)
        .then(() => {
            console.log(`File ${fileToRemove} has successfully removed!`);
        }).catch(() => {
            throw new FsOperationFailedError();
        });

};

await remove();