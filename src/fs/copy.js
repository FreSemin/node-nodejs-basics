import { readdir, mkdir, copyFile } from 'node:fs/promises';
import FsOperationFailedError from '../utils/fs-operation-failed.error.js';
import { getDirNameFromUrl } from '../utils/path.utils.js';
import * as path from 'path';

const scriptDir = getDirNameFromUrl(import.meta.url);
const destinationDir = path.join(scriptDir, 'files_copy');
const sourceDir = path.join(scriptDir, 'files');

const copy = async () => {
    try {
        await mkdir(destinationDir);

        const filesToCopy = await readdir(sourceDir)
            .then((files) => {
                return files.map((file) => {
                    return copyFile(path.join(sourceDir, file), path.join(destinationDir, file));
                });
            });

        await Promise.all(filesToCopy)
            .then(() => {
                console.log('Folder and files has successfully copied!');
            });
    } catch {
        throw new FsOperationFailedError();
    }
};

await copy();
