const fs = require('fs');
let path = './config.txt'

async function writeFile(payload){
  try {
    let content = `Token Address deployed at: ${payload}`
      fs.writeFileSync(path, content, {encoding:'utf8',flag:'w'})
    } catch (error) {
      console.log('error in writing File', error);
  }
}

module.exports = writeFile;