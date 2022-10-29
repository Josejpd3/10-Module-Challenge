const Employee = require("./Employee");

// Engineer Class

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github
    }

    getGithub() {
        return this.github
    }

    getRole() {
        return "Engineer";
    }
}

// Engineer Prompt Questions

const engineerQuestions = [
    {
        type: 'input',
        message: 'What is your engineers name?',
        name: 'engineerName',
        validate: (value) => {if(value){return true} else {return 'i need a value to continue'}}
       },  
       {
        type: 'input',
        message: 'What is the engineers employee ID number?',
        name: 'engineerId',
        validate: (value) => {if(value){return true} else {return 'i need a value to continue'}}
       }, 
       {
        type: 'input',
        message: 'What is the engineers employee email?',
        name: 'engineerEmail',
        validate: (value) => {if(value){return true} else {return 'i need a value to continue'}}
      }, 
      {
        type: 'input',
        message: 'What is the engineers github?',
        name: 'engineerGithub',
        validate: (value) => {if(value){return true} else {return 'i need a value to continue'}}
      },
]

// Exports

module.exports = {
    Engineer,
    engineerQuestions
}