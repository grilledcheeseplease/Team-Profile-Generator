const inquirer = require('inquirer');
const utils = require('./utils/pageGenerator');

const questions = [
    {
        type: 'input',
        message: 'What is the team manager\'s name?',
        name: 'name',
    },
    {
        type: 'number',
        message: 'What is the team manager\'s id number?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is the team manager\'s email?',
        name: 'email',
    },
    {
        type: 'number',
        message: 'What is the team manager\'s office number?',
        name: 'officeNumber',
    },
    {
        type: 'rawlist',
        message: 'What type of team member would you like to add?',
        name: 'role',
        choices: [
            'Engineer',
            'Intern',
            'I don\'t want to add any more team members.',
        ]
    },
    {
        type: 'input',
        message: 'What is your engineer\'s name?',
        name: 'name',
        when: (answers) => answers.role === 'Engineer',
    },
    {
        type: 'number',
        message: 'What is your engineer\'s id number?',
        name: 'id',
        when: (answers) => answers.role === 'Engineer',
    },
    {
        type: 'input',
        message: 'What is your engineer\'s email?',
        name: 'email',
        when: (answers) => answers.role === 'Engineer',
    },
    {
        type: 'input',
        message: 'What is your engineer\'s GitHub username?',
        name: 'github',
        when: (answers) => answers.role === 'Engineer',
    },
    {
        type: 'rawlist',
        message: 'What type of team member would you like to add?',
        name: 'role',
        choices: [
            'Engineer',
            'Intern',
            'I don\'t want to add any more team members.',
        ]
    },
    {
        type: 'input',
        message: 'What is your intern\'s name?',
        name: 'name',
        when: (answers) => answers.role === 'Intern',
    },
    {
        type: 'number',
        message: 'What is your intern\'s id number?',
        name: 'id',
        when: (answers) => answers.role === 'Intern',
    },
    {
        type: 'input',
        message: 'What is your intern\'s email?',
        name: 'email',
        when: (answers) => answers.role === 'Intern',
    },
    {
        type: 'input',
        message: 'What is your intern\'s school?',
        name: 'school',
        when: (answers) => answers.role === 'Intern',
    },
    {
        type: 'rawlist',
        message: 'What type of team member would you like to add?',
        name: 'role',
        choices: [
            'Engineer',
            'Intern',
            'I don\'t want to add any more team members.',
        ]
    },
]