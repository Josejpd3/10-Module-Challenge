const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
      }
}


const managerQuestions = [

    {
     type: 'input',
     message: 'What is your managers name?',
     name: 'managerName',
     validate: (value) => {if(value){return true} else {return 'i need a value to continue'}}
    },  
    {
     type: 'input',
     message: 'What is the managers employee ID number?',
     name: 'managerId',
     validate: (value) => {if(value){return true} else {return 'i need a value to continue'}}
    }, 
    {
     type: 'input',
     message: 'What is the managers email?',
     name: 'managerEmail',
     validate: (value) => {if(value){return true} else {return 'i need a value to continue'}}
   }, 
   {
     type: 'input',
     message: 'What is the managers office number?',
     name: 'officeNumber',
     validate: (value) => {if(value){return true} else {return 'i need a value to continue'}}
   },

 ];

module.exports = {
    Manager,
    managerQuestions
}