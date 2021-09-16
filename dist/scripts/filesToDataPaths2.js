const { promisify } = require('util');
const { resolve, join } = require('path');

const fs = require('fs');
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

async function getFiles(dir) {
  const subdirs = await readdir(dir);
  const files = await Promise.all(subdirs.map(async (subdir) => {
    const res = resolve(dir, subdir);
    // const obj = {type: 'dir', name: subdir, path: res};
    return (await stat(res)).isDirectory() ? getFiles(res) : res;
  }));
  return files.reduce((a, f) => a.concat(f), []);
}

// getFiles(join(__dirname, '..', 'assets', 'DEKORLAR'))
//   .then(files => console.log(files))
//   .catch(e => console.error(e));


(async () => console.log(await getFiles(join(__dirname, '..', 'assets', 'DEKORLAR'))))()
  