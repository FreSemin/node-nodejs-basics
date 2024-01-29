import { writeFile } from 'node:fs/promises';

const fileName = 'fresh.txt';
const filePath = `${process.cwd()}/src/fs/files/${fileName}`;
const fileContent = 'I am fresh and young';

const create = async () => {
    await writeFile(filePath, fileContent, { flag: 'wx' })
        .then(() => {
            console.log('File successfully created!');
        }).catch(() => {
            console.log('FS operation failed');
        });
};

await create();