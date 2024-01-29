import { rename as fsRename } from 'node:fs/promises';
import FsOperationFailedError from '../utils/fs-operation-failed.error.js';
import { getDirNameFromUrl } from '../utils/path.utils.js';
import * as path from 'path';

const scriptDir = getDirNameFromUrl(import.meta.url);
const destinationDir = path.join(scriptDir, 'files');
const sourceDir = path.join(scriptDir, 'files');
const oldFile = path.join(sourceDir, 'wrongFilename.txt');
const newFile = path.join(destinationDir, 'properFilename.md');

const rename = async () => {
    await fsRename(oldFile, newFile)
        .then(() => {
            console.log(`File ${oldFile} successfully renamed to ${newFile}`);
        })
        .catch(() => {
            throw new FsOperationFailedError();
        });
};

await rename();