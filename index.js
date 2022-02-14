const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

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
        name: 'repo',
        message: 'What is the repository name of this project?',
        suffix: ' (Required, replace spaces with dashes)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter the project repository!');
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
    {
        type: 'confirm',
        name: 'installRequired',
        message: 'Does the project require special installation to run?',
        default: true
    },
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
        choices: ['MIT', 'GNU', 'Apache']
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

function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if (err) {
                reject(err);
                console.log("No file was created.")
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


function init() {
    console.clear();
    console.log(`
    ##########################################
    #            README GENERATOR            #
    ##########################################
    `);
    return inquirer.prompt(questions);
};

init()
    .then(data => {
        console.log(data);
    })