// pull in needed mods and files 
const inquirer = require('inquirer');
const src = require('./src/pageGenerator');
const {Manager, managerPrompt} = require('./lib/Manager');
const {Engineer, engineerPrompt} = require('./lib/Engineer');
const {Intern, internPrompt} = require('./lib/Intern');

// empty array to store team members
const teamMembers = [];

const init = () => {managerQuestions()};

const managerQuestions = () => {
    inquirer.prompt(managerPrompt)
    .then((data) => {
        const manager = new Manager(data.name, data.id, data.email, data.officeNumber)
        teamMembers.push(manager);
        roleSelect();
    })
};
const engineerQuestions = () => {
    inquirer.prompt(engineerPrompt)
    .then((data) => {
        const engineer = new Engineer(data.name, data.id, data.email, data.github)
        teamMembers.push(engineer);
        roleSelect();
    })
};
const internQuestions = () => {
    inquirer.prompt(internPrompt)
    .then((data) => {
        const intern = new Intern(data.name, data.id, data.email, data.school)
        teamMembers.push(intern);
        roleSelect();
    })
};

const roleSelect = () => {
    inquirer.prompt(
        {
            type: 'list',
            message: 'What type of team member would you like to add?',
            name: 'role',
            choices: [
                'Manager',
                'Engineer',
                'Intern',
                'I don\'t want to add any more team members.',
            ]
        }
    )
    .then(data => {
        if (data.role === 'Manager'){ managerQuestions();};
        if (data.role === 'Engineer'){ engineerQuestions();};
        if (data.role === 'Intern'){ internQuestions();};
        if (data.role === 'I don\'t want to add any more team members.'){ 
            console.log(src.teamCards(teamMembers))
            return src.teamCards(teamMembers);};
    })
};

init();