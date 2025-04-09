/* eslint-disable @typescript-eslint/no-var-requires */
var fs = require('fs');
var path = require('path');
const svgDir = path.resolve(__dirname, './images');

function readfile(filename) {
  let nameNeedLength = filename.lastIndexOf('.');

  return new Promise((resolve, reject) => {
    fs.readFile(path.join(filename), 'utf8', function (err, data) {
      console.log('data===', data);
      let viewBox = data.match(/viewBox="\d*\s\d*\s\d*\s\d*"/g)[0];
      let svgMatch = data.match(/[width|height]="\d*px"/g);
      // data = data.replace(/^(<svg)(.*)(xlink)">$/g, `<svg viewBox="${viewBox}" version="1.1">`);
      data = data.replace(/(width|height)="\d*px"/g, '');
      data = data.replace(/xmlns[^>]*/g, '');
      // data = data.replace(/stroke-width/g, 'strokeWidth');
      // data = data.replace(/fill-rule/g, 'fill-Rule');

      console.log(data, viewBox, svgMatch);
      if (err) reject(err);
      resolve({
        [path.basename(filename, path.extname(filename))]: data,
      });
    });
  });
}
function getAllSvgFiles(dir) {
  return new Promise((resolve, reject) => {
    fs.readdir(dir, { withFileTypes: true }, (err, entries) => {
      if (err) return reject(err);

      let svgFiles = [];
      const subDirPromises = [];

      entries.forEach((entry) => {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
          subDirPromises.push(getAllSvgFiles(fullPath));
        } else if (entry.isFile() && path.extname(entry.name) === '.svg') {
          svgFiles.push(fullPath);
        }
      });

      Promise.all(subDirPromises)
        .then((nestedFiles) => {
          resolve(svgFiles.concat(...nestedFiles));
        })
        .catch(reject);
    });
  });
}
function readSvgs() {
  return new Promise((resolve, reject) => {
    getAllSvgFiles(svgDir)
      .then((files) => {
        Promise.all(files.map((filename) => readfile(filename)))
          .then((data) => resolve(data))
          .catch((err) => reject(err));
        console.log('SVG Files:', files);
      })
      .catch((err) => {
        console.error('Error:', err);
      });
  });
}

readSvgs()
  .then((data) => {
    // console.log('data: ', data);
    let svgFile = 'export default ' + JSON.stringify(Object.assign.apply(this, data));
    fs.writeFile(path.resolve(__dirname, './svgs.ts'), svgFile, function (err) {
      if (err) throw new Error(err);
    });
  })
  .catch((err) => {
    throw new Error(err);
  });
