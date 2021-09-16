const fs = require('fs');
const { resolve, join, relative } = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

const pth = join('..', 'assets', 'DEKORLAR');
console.log("createDirPath:", pth)

const readOneLeaf = async (pth) => {

    // read all directories
    let files = await readdir(pth);
    if(files.length == 0) return ''; 

    // select the first directory, then its 350x350 subfolder since ot contains thumbnails
    const dir = join(pth, files[0], '350x350'); // pth + Artdeco/350x350

    files = await readdir(dir);
    
    const leafFile = relative('..', join(dir, files[0]));
    return leafFile;
}

const readAllLeaves = async (pth) => {

    // read all directories
    let files = await readdir(pth);
    if(files.length == 0) return ''; 

    // select the first directory, then its 350x350 subfolder since ot contains thumbnails
    const alldirs = await Promise.all(files.map(async (name)=>{
        const dir = join(pth, name, '350x350'); // pth + Artdeco/350x350
        let files = await readdir(dir);
        return files.map(it =>relative('..', join(dir, it)));
    }))

    return alldirs.flat();
}

const readFolder = async (pth) => {
    let files = await readdir(pth);
    // console.log(files)

    const res = await Promise.all(files.map(async function (name) {
        const filePath = join(pth, name);
        const collections = await readdir(filePath);
        
        const paths = await Promise.all(collections.map( async (name) =>{
            const leaf = await readOneLeaf(join(filePath, name));
            const others = await readAllLeaves(join(filePath, name));
            return {name, thumbnailPath: leaf, otherPaths: others};
        }));

        return {name, paths}
    }));   

    return res;
}

readFolder(pth).then(res => {
    // console.log(res);
    let jsonFile = join('..', 'assets', 'data') + ".json";
    fs.writeFileSync(`${jsonFile}`, JSON.stringify(res));
})

readOneLeaf('../assets/DEKORLAR/LAMIART/Artdeco Collection').then(it => {
    console.log('hey', it)
})

readAllLeaves('../assets/DEKORLAR/LAMIART/LA Collection').then(it =>{
    console.log(it)
});