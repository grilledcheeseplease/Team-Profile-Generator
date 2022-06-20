// pull in needed mods and files 
const inquirer = require('inquirer');
const src = require('./src/pageGenerator');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// empty array to store team members
const teamMembers = [];

// question prompts with conditional questions seperated by team member role with when

const teamPrompts = [
    {
        type: 'list',
        message: 'What is your team member\'s role?',
        name: 'role',
        choices: () => {
            if (teamMembers.some(employee => employee.role === 'Manager')) {
                return ['Engineer', 'Intern']    
            } else {
                return ['Manager', 'Engineer', 'Intern']
            }
        }
    },
    {
        type: 'input',
        message: 'What is your team member\'s name?',
        name: 'name',
    },
    {
        type: 'number',
        message: 'What is your team member\'s id number?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is your team member\'s email?',
        name: 'email'
    },
    {
        type: 'number',
        message: 'What is your manager\'s office number?',
        name: 'officeNumber',
        when: (answers) => answers.role === 'Manager'
    },
    {
        type: 'input',
        message: 'What is your engineer\'s GitHub username?',
        name: 'github',
        when: (answers) => answers.role === 'Engineer'
    },
    {
        type: 'input',
        message: 'What is your intern\'s school?',
        name: 'school',
        when: (answers) => answers.role === 'Intern'
    },
    {
        type: 'confirm',
        message: 'Would you like to add another team member?',
        name: 'addMember'
    },


];


inquirer.prompt(teamPrompts).then((answers) => {
    src.generatePage(answers);
});