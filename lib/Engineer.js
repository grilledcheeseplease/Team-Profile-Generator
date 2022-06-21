const Employee = require('./Employee.js');

const engineerPrompt = [

    {
        type: 'input',
        message: 'What is your engineer\'s name?',
        name: 'name',
    },
    {
        type: 'number',
        message: 'What is your engineer\'s id number?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is your engineer\'s email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your engineer\'s GitHub username?',
        name: 'github',
    },
]

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }
    getRole() {
        return 'Engineer';
    }
    getGithub() {
        return this.github;
    }
}

module.exports = { Engineer, engineerPrompt };