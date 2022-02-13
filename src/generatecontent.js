
const genInstall = installCont => {
  if (!installCont) {
    return ''
  } else {
    return `## Installation \n ${installCont}`
  }
}

const genContribute = contributeCont => {
  if (!contributeCont) {
    return ''
  } else {
    return `
  ## Installation
  ${installCont}`
  }
}

function generateReadmeContent(data) {
  console.log(data);

  return `  
  # ${data.title}

  ## Description
  ${data.description}

  ${genInstall(data.installinstructions)}

  ## Usage
  ${data.usage}

  ## License
  This project was developed under the ${data.license} license.

  ## Testing
  ${data.testinginstructions}


  `
}

module.exports = generateReadmeContent;