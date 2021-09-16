const fs = require('fs');
const { resolve, join } = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

const pth = join('..', 'assets', 'DEKORLAR');
console.log("createDirPath:", pth)

const readFolder = async (pth) => {
    let files = await readdir(pth);

    const res = await Promise.all(files.map(async function (name) {
        const filePath = join(pth, name);
        const st = await stat(filePath);

        return st.isFile() ?
            {type: 'file', name: name, path: filePath} : 
            {type: 'dir', name: name, path: filePath, children: await readFolder(filePath)};
    }));   

    return res;
}

readFolder(pth).then(res => {
    // console.log(res);
    let jsonFile = join('..', 'assets', 'data') + ".json";
    fs.writeFileSync(`${jsonFile}`, JSON.stringify(res));
})
