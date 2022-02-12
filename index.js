const inquirer = require("inquirer");
const generateReadme = require('./src/template.js');

const setupReadme = (creatorInfo) => {
    console.clear();
    console.log(`
================================================
                README GENERATOR                
================================================

    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            suffix: ' (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
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
            message: 'What is the title of your project?',
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
        {
            type: 'checkbox',
            name: 'readme_sections',
            message: 'Choose which sections you would like to include in your README',
            choices: ['Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions']
        },
        {
            type: 'input',
            name: 'installinstructions',
            message: 'Enter instructions on how to install the project',
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
            message: 'List the GitHub usernames that contributed to this project',
            suffix: ' (required, separated by commas)',
        },
        // Test instructions
        {
            type: 'input',
            name: 'testinstructions',
            message: 'Describe how to run tests on the project',
            suffix: ' (Required, separated by commas)',
        },
    ])
}



setupReadme()
    .then(projectData => {
        const genReadme = generateReadme(projectData);
    })

console.log(genReadme);