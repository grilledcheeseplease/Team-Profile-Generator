const Employee = require('./Employee.js');

const internPrompt = [
    {
        type: 'input',
        message: 'What is your intern\'s name?',
        name: 'name',
    },
    {
        type: 'number',
        message: 'What is your intern\'s id number?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is your intern\'s email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your intern\'s school?',
        name: 'school',
    },
]

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }
    getRole() {
        return 'Intern';
    }
    getSchool() {
        return this.school;
    }
}

module.exports = {Intern, internPrompt};