const genInstall = installCont => {
  if (!installCont) {
    return ''
  } else {
    return `## Installation
    ${installCont}`
  }
}

const genContribute = contributeCont => {
  if (!contributeCont) {
    return ''
  } else {
    return `## Installation
    ${installCont}`
  }
}

function generateReadmeContent(data) {
  return `  
  # ${data.title}

  ## Description
  ${data.description}

  ${genInstall(data.installation)}

  `
}

module.exports = generateReadmeContent;