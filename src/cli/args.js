const parseArgs = () => {
    const args = process.argv.splice(2);
    const resArr = [];

    for (let i = 0; i < args.length; i++) {
        if (args[i].startsWith('--')) {
            resArr.push(`${args[i].slice(2)} is ${args[i + 1]}`);
        }
    }

    console.log(resArr.join(', '));
};

parseArgs();