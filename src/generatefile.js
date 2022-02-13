const fs = require('fs');

const generateFile = file => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./README.md', file, err => {
      if (err) {
        reject (err);
        return;
      } else {
        console.log("File created!");
      }

      resolve({
        ok: true,
        message: "File created!"
      });
    });
  });
};

module.exports = generateFile;