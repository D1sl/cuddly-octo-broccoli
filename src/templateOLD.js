module.exports = readmeData => {
  const fs = require("fs");

  const {
    name: name,
    github: github,
    title: projectTitle,
    description: projectDescription,
    readme_sections: readme_sections,
    installinstructions: installation,
    usage: usage,
    license: license,
    contributions: contributions,
    testinstructions: tests
  } = readmeData

  console.log(readme_sections);

  let installContent = ``
  if (readme_sections.includes("Installation")) {
    let installContent = `
      ## Installation
  
      ${installation}`
  }

    console.log(installContent);
  


  let content = "";
  readme_sections.map(contents=>{
    content += `* [${contents}](#${contents}.toLowerCase()}) \n`
  })

  let buildToc = function() {
    if (installation) {
      toc = toc.push = "[Installation](#Installation)"
    }
  }

  const fileContents = `
# ${projectTitle}
[![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)](https://github.com/${github})
        
## Description
 ​
${projectDescription}
 ​
## Table of Contents
${content}

 ​
${installContent}
 ​
## Usage
 ​
${usage}
 ​
## License
 ​
This project is licensed under the ${license} license.
          
## Contributing
 ​
[${github}]('https://github.com/${github}') 
        
## Tests
 ​
${tests}
`;

  fs.writeFile("README.md", fileContents, (err) => {
    if (err) throw err;
    console.log("The README has been generated!");
  })


  // return `
  // # ${projectTitle}
  // [![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)](https://github.com/${github})

  // ## Description
  // ​
  // ${projectDescription}
  // ​
  // ## Table of Contents

  // ## Installation
  // ​
  // ${installation}
  // ​
  // ## Usage
  // ​
  // ${usage}
  // ​
  // ## License
  // ​
  // This project is licensed under the ${license} license.

  // ## Contributing
  // ​
  // [${github}]('https://github.com/${github}') 

  // ## Tests
  // ​
  // ${tests}
  // `;
};



