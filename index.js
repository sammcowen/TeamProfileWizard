// Required packages 
const inquirer = require('inquirer');

const fs = require('fs');


// questions to create team 
const managerQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: 'Enter MANAGER name:',
        validate: managerNameInput => {
            if (managerNameInput) {
                return true;
            } else {
                console.log('You MUST to enter a name to continue!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'employeeId',
        message: 'Enter employee id for MANAGER:',
        validate: employeeIdInput => {
            if (employeeIdInput) {
                return true;
            } else {
                console.log('You MUST enter a employee ID to continue!');
            }
        }
    },
    {
        type: 'input',
        name: 'emailAddress',
        message: 'Enter MANAGER email address:',
        validate: emailAddressInput => {
            if (emailAddressInput) {
                return true;
            } else {
                console.log('You MUST enter an email address to continue!');
            }
        }
    },
    {
        type: "input",
        name: "officeNum",
        message: "Enter MANAGER office number:",
        validate: officeNumInput => {
            if (officeNumInput) {
                return true;
            } else {
                console.log('You MUST enter an office number to continue!');
            }
        }
    }
];

// Function to init app
function startApp() {
    inquirer.prompt(managerQuestions)
        .then(function (answers) {
            writetoFile("index.html", generateHTML)
        });
};

// start app 
startApp();