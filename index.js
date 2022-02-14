// Load required modules
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// Questions
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
        suffix: ' (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your Email address',
        suffix: ' (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your Email address!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
        suffix: ' (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter the project title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe the project',
        suffix: ' (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description!');
                return false;
            }
        }
    },
    // Ask if the app requires any specific installation to run
    {
        type: 'confirm',
        name: 'installRequired',
        message: 'Does the project require special installation to run?',
        default: true
    },
    // ...if yes, ask the question
    {
        type: 'input',
        name: 'installinstructions',
        message: 'Enter instructions on how to install the project',
        when: ({ installRequired }) => {
            if (installRequired) {
                return true;
            } else {
                return false;
            }
        },
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter installation instructions!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the main usage of this project?',
        suffix: ' (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter a use case!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like to apply to this project?',
        suffix: ' (Required)',
        choices: ['MIT', 'GNU', 'Apache', 'None']
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'What are the guidelines for contribution on this project?',
    },
    {
        type: 'input',
        name: 'testinstructions',
        message: 'Describe how to run tests on the project',
        suffix: ' (required)',
    },
]

// Write returned data to a README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if (err) {
                console.clear();
                console.log("There was an error, no file was created.");
                reject(err);
                return;
            } else {
                console.clear();
                console.log("File created!");
            }

            resolve({
                ok: true,
                message: "File created!"
            });
        });
    });
};

// Function to initialize the app
function init() {
    console.clear();
    console.log(`
    ##########################################
    #            README GENERATOR            #
    ##########################################
    `);
    return inquirer.prompt(questions);
};

// Function call to initialize the app
init()
    .then(readmeData => {
        return generateMarkdown(readmeData)
    })
    .then((completedReadme) => {
        return writeToFile('./readme/README.md', completedReadme);
    })