import { Transform } from 'stream';

const transform = async () => {
    const reverseStr = (str) => str.split('').reverse().join('');

    const reverseStream = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, reverseStr(chunk.toString()));
        }
    });

    process.stdin.pipe(reverseStream).pipe(process.stdout);
};

await transform();