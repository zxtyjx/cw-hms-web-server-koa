var fs = require('fs');
var path = require('path');

//#region 工具方法
/**
* 读取文件
*
* @param {any} filename
* @param {any} encoding
* @returns
*/
async function readFile(filename, encoding) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filename, encoding, function (err, res) {
      if (err) {
        return reject(err);
      }
      resolve(res);
    })
  })
}

/**
* 写入文件
*
* @param {any} filename
* @param {any} data
* @param {any} encoding
* @returns
*/
async function writeFile(filename, data, encoding) {
  return new Promise(function (resolve, reject) {
    fs.writeFile(filename, data, encoding, function (err) {
      if (err) {
        return reject(err);
      }
      resolve();
    })
  })
}

/**
 * 判断文件是否存在
 *
 * @param {*} filename
 * @returns
 */
async function existsFile(filename) {
  return new Promise(function (resolve, reject) {
    fs.exists(filename, function (err, res) {
      if (err) {
        return reject(err);
      }
      resolve(res);
    })
  })
}
//#endregion

module.exports = async () => {
  try {
    const indexPath = path.join(process.env.RESDIR || process.cwd(), '/views/index.html');
    console.log('处理index.html文件');
    let indexFile = await readFile(indexPath, 'utf-8');
    indexFile = indexFile.replace(/var v=1/g, "<%- apiInit%>");
    console.log('完成index.html替换');

    await writeFile(indexPath, indexFile, 'utf-8');
  } catch (e) {
    console.log('err', e);

  }

}