// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return 'No license';
  } else {
    return `![License](https://img.shields.io/badge/License-${license}-green)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(`# ${data.title}
  
  ${renderLicenseBadge(data.license)}

  `)
//   return `# loaded

// `;
}

module.exports = generateMarkdown;







// // Needed: , , , , contribution guidelines and test instructions

// const genInstall = installCont => {
//   if (!installCont) {
//     return ''
//   } else {
//     return `## Installation \n ${installCont}`
//   }
// }

// const checkInstall = check => {
//   if (!check) {
//     return '';
//   } else {
//     return `* [Installation](#Installation)`
//   }
// }

// const genContribute = contributeCont => {
//   if (!contributeCont) {
//     return ''
//   } else {
//     return `
//   ## Contribution
//   ${contributeCont}`
//   }
// }

// const checkContribute = check => {
//   if (!check) {
//     return ''
//   } else {
//     return `* [Contribution guidelines](#Contribution)`
//   }
// }

// const genTesting = testingCont => {
//   if (!testingCont) {
//     return ''
//   } else {
//     return `
//   ## Testing
//   ${contributeCont}`
//   }
// }

// const checkTesting = check => {
//   if (!check) {
//     return ''
//   } else {
//     return `* [Testing](#Testing)`
//   }
// }

// function generateReadmeContent(data) {
//   console.log(data);

//   return `  
//   # ${data.title}
//   ![License]( https://img.shields.io/badge/License-${data.license}-green)
 

//   ## Description
//   ${data.description}

//   ## Table of Contents
//   ${checkInstall(data.installinstructions)}
//   * [Usage](#Usage)
//   * [License](#License)
//   ${checkContribute(data.contributions)}

//   ${genInstall(data.installinstructions)}

//   ## Usage
//   ${data.usage}

//   ## License
//   This project was developed under the ${data.license} license.

//   ${genContribute(data.contributions)}

//   ${genTesting(data.testing)}


//   `
// }

// module.exports = generateMarkdown;