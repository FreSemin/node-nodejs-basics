const parseEnv = () => {
    const envObj = process.env;
    const envObjKeys = Object.keys(envObj);

    const searchStr = 'RSS_';
    const searchKeys = envObjKeys.filter((key) => key.startsWith(searchStr));

    console.log(searchKeys.map((key) => `${key}=${envObj[key]};`).join(' '));
};

parseEnv();