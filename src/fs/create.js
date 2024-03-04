import { writeFile } from 'node:fs/promises';
import FsOperationFailedError from '../utils/fs-operation-failed.error.js';
import { getDirNameFromUrl } from '../utils/path.utils.js';
import * as path from 'path';

const fileName = 'fresh.txt';
const destinationDir = 'files';
const fileContent = 'I am fresh and young';
const scriptDir = getDirNameFromUrl(import.meta.url);

const create = async () => {
    await writeFile(path.join(scriptDir, destinationDir, fileName), fileContent, { flag: 'wx' })
        .then(() => {
            console.log('File successfully created!');
        }).catch(() => {
            throw new FsOperationFailedError();
        });
};

await create();