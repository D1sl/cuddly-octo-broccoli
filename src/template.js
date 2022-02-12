module.exports = readmeData => {
    const fs = require("fs");

    const {
        name: name,
        github: github,
        title: projectTitle,
        description: projectDescription,
        readme_sections: [],
        installinstructions: installation,
        usage: usage,
        license: license,
        contributions: contributions,
        testinstructions: tests
      } = readmeData
  
      return `
      # ${projectTitle}
      [![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)](https://github.com/${github})
      
      ## Description
      ​
      ${projectDescription}
      ​
      ## Table of Contents
      
      ## Installation
      ​
      ${installation}
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
    };



