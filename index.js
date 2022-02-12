const fs = require("fs");
const inquirer = require("inquirer");

if (fs) {
    console.log("fs loaded");
}

if (inquirer) {
    console.log("inquirer loaded")
}



const setupCreator = () => {
    console.clear();
    console.log(`
====================================
          README GENERATOR       
====================================

// STEP 1 //////////////////////////
Setup creator details

    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
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
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        }
    ])
}

const setupProject = () => {
    console.clear();
    console.log(`
====================================
          README GENERATOR       
====================================

////////////// STEP 2 //////////////
        Setup project details

    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
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
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        }
    ])
}



setupCreator()
    .then(setupProject)