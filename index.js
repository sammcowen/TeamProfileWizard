// Required packages 
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');
// My libraries
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// creating team array
let teamArr = [];

// function to add Manager to team
const addManager = () => {
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
            addTeamMember();
        })


};
// function to  add team member
const addTeamMember = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "addTeam",
            message: "What would you like to do next? Please CHOOSE 1",
            choices: [
                "Add Engineer",
                "Add Intern",
                "Finish Building My Team"
            ]
        }
    ]).then(function (data) {
        switch (data.addTeam) {
            case "Add Engineer":
                addEngineer();
                break;

            case "Add Intern":
                addIntern();
                break;

            case "Finish Building My Team":
                createTeam(teamArr);
                break;
        }
    });
};
// function to add engineer
const addEngineer = () => {

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
    ]).then(function (engInput) {
        const { engName, id, email, github } = engInput;
        const engineer = new Engineer(engName, id, email, github);

        teamArr.push(engineer);
        console.log(teamArr);
        addTeamMember();
    });
};
// function to add  intern
const addIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'Enter the INTERN name:',
            validate: internNameInput => {
                if (internNameInput) {
                    return true;
                } else {
                    console.log('You must enter intern name to continue!');
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter employee id for INTERN:',
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
            message: 'Enter intern email address:',
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
            name: 'school',
            message: 'Enter INTERN school:',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('You MUST enter a SCHOOL to continue!');
                }
            }
        }
    ]).then(function (internInput) {
        const { internName, id, email, school } = internInput;
        const intern = new Intern(internName, id, email, school);

        teamArr.push(intern);
        console.log(teamArr);
        addTeamMember();
    });
};

const createTeam = (teamArr) => {
    console.log(`You're finished building your team! Check out index.html to see your complete roster!`);
    console.log(teamArr);
};


 
// start app 
addManager()

