// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

console.log("hey there");

// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'title',
            message: "What is the title of your project?",
          },
          {
            type: 'input',
            name: 'description',
            message: "How would you describe your project to your user?",
          },
          {
            type: 'input',
            name: 'install',
            message: "Give the user installation instructions. How do we install your product?",
          },
          {
            type: 'input',
            name: 'contribution',
            message: "How can fellow developers contribute to your project.",
          },
          {
            type: 'input',
            name: 'testing',
            message: "How can we test your product?",
          },
          {
            type: 'list',
            name: 'license',
            message: "Which license do you want to choose?",
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']

          },
          {
            type: 'input',
            name: 'questions',
            message: "Enter your email address so users can contact you with questions.",
          },
    ]
console.log(questions)


// TODO: Create a function to write README file
function writeToFile(content) {

  fs.writeFile('README.md',content, (err) => { 
    if (err){
        console.log(err);
    } else {
        console.log('README.md is ready');
    }
})
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log(responses);
            const readmeContent = generateMarkdown(responses);
            writeToFile(readmeContent);
        });
}

// Function call to initialize app
init();
