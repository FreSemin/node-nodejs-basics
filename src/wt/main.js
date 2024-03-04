import { Worker } from "worker_threads";
import { cpus } from "os";
import { getDirNameFromUrl } from '../utils/path.utils.js';
import * as path from 'path';

const scriptDir = getDirNameFromUrl(import.meta.url);
const workerFile = path.join(scriptDir, 'worker.js',);

const startNum = 10;

const performCalculations = async () => {

    const workerThread = (workerFile, workerData) => {
        return new Promise((resolve, reject) => {
            const worker = new Worker(workerFile, { workerData });

            worker.on('message', (data) => resolve({ status: resolve, data }));
            worker.on('error', reject);
        });
    };

    const workers = [];

    for (let i = 0; i < cpus().length; i++) {
        workers.push(workerThread(workerFile, startNum + i));
    }

    const workersResult = await Promise.allSettled(workers)
        .then((threads) => {
            return threads.map((promiseRes) => {
                return promiseRes.status === 'fulfilled'
                    ? { status: 'resolved', data: promiseRes.value.data }
                    : { status: 'error', data: null };
            });
        });

    console.log(workersResult);
};

await performCalculations();