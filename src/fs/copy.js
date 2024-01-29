import { readdir, mkdir, copyFile } from 'node:fs/promises';

const folderCopyName = 'files_copy';
const folderName = 'files';
const folderPath = `${process.cwd()}/src/fs/`;

const copy = async () => {
    try {
        await mkdir(folderPath + folderCopyName);

        const filesToCopy = await readdir(folderPath + folderName)
            .then((files) => {
                return files.map((file) => {
                    return copyFile(`${folderPath}${folderName}/${file}`, `${folderPath}${folderCopyName}/${file}`);
                });
            });

        await Promise.all(filesToCopy)
            .then(() => {
                console.log('Folder and files has successfully copied!');
            });
    } catch {
        console.log('FS operation failed');
    }
};

await copy();
