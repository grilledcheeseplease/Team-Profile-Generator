const Employee = require('./Employee.js');

const managerPrompt = [
    {
        type: 'input',
        message: 'What is your manager\'s name?',
        name: 'name',
    },
    {
        type: 'number',
        message: 'What is your manager\'s id number?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is your manager\'s email?',
        name: 'email'
    },
    {
        type: 'number',
        message: 'What is your manager\'s office number?',
        name: 'officeNumber',
    },
]

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return 'Manager';
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = {Manager, managerPrompt};