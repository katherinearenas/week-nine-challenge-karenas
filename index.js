// TODO: Include packages needed for this application
const inquirer = require(`inquirer`);
const fs = require(`fs`);

console.log("hey there");

// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            input: 'title',
            message: "What is the title of your project?",
          },
          {
            type: 'input',
            input: 'description',
            message: "How would you describe your project to your user?",
          },
          {
            type: 'input',
            input: 'install',
            message: "Give the user installation instructions. How do we install your product?",
          },
          {
            type: 'input',
            input: 'contribution',
            message: "How can fellow developers contribute to your project.",
          },
          {
            type: 'input',
            input: 'testing',
            message: "How can you test your product?",
          },
    ];

console.log(questions)

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(README.md)

}

// TODO: Create a function to initialize app
function init(questions) {
    inquirer
        .prompt(questions)
        .then((responses) => {writeToFile(responses)}
          );
}

// Function call to initialize app
init();
