import { writeFile } from 'node:fs/promises';
import FsOperationFailedError from '../utils/fs-operation-failed.error.js';

const create = async () => {
    const fileName = 'fresh.txt';
    const filePath = `${process.cwd()}/src/fs/files/${fileName}`;
    const fileContent = 'I am fresh and young';

    await writeFile(filePath, fileContent, { flag: 'wx' })
        .then(() => {
            console.log('File successfully created!');
        }).catch(() => {
            throw new FsOperationFailedError();
        });
};

await create();