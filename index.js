// Required packages 
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamArr = [];

// questions to create team 
const managerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
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
            name: 'id',
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
            name: 'email',
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
        },

    ])
        .then(function (managerInput) {
            const { name, id, email, officeNum } = managerInput;
            const manager = new Manager(name, id, email, officeNum);

            teamArr.push(manager);
            console.log(teamArr);
        })

};

const addEmployee = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "addTeam",
            message: "What would you like to do next? Please CHOOSE 1",
            choices: [
                "Add Engineer",
                "Add Intern",
                new inquirer.Separator(),
                "Finish Building My Team "
            ]
        }
    ]).then(answer => {
        console.log(answer)
        if (answer.addTeam === "Add Engineer") {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'engName',
                    message: 'Enter the engineer name:',
                    validate: engNameInput => {
                        if (engNameInput) {
                            return true;
                        } else {
                            console.log('You must enter engineer name to continue!');
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'Enter employee id for ENGINEER:',
                    validate: employeeIdInput => {
                        if (employeeIdInput) {
                            return true;
                        } else {
                            console.log('You MUST enter an employee ID to continue!');
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'Enter ENGINEER email address:',
                    validate: emailAddressInput => {
                        if (emailAddressInput) {
                            return true;
                        } else {
                            console.log('You MUST enter an email address to continue!');
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'github',
                    message: 'Enter ENGINEER github username:',
                    validate: githubInput => {
                        if (githubInput) {
                            return true;
                        } else {
                            console.log('You MUST enter a github username to continue!');
                        }
                    }
                }
            ])
        }
    })
};









// start app 
managerQuestions()
    .then(addEmployee);
