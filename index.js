// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./assets/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    name: 'title',
    message: 'What is the title of your project?',
    type: 'input',
  },
  {
    name: 'description',
    message: 'Add an indepth description about the purpose of your application. What was your motivation, and what problem does it solve? ',
    type: 'input',
  },
  {
    name: 'installation',
    message: 'Please include any instructions for the installation process of your project.',
    type: 'input',
  },
  {
    name: 'usage',
    message: 'Provide a usage guide of the project. (Be specific)',
    type: 'input',
  },
  {
    name: 'license',
    message: 'Choose a license for you application',
    choices: ['Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0'],
    type: 'list',
  },
  {
    name: 'github',
    message: 'Please provide your GitHub username.',
    type: 'input',
  },
  {
    name: 'email',
    message: 'Please provide your email address.',
    type: 'input',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.appendFile(fileName, data, (err) =>
  err ? console.log(err) : console.log('Success!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(questions)
  .then((data) => {
    const fileName = `${data.title.toLowerCase().split(' ').join('')}.md`;
    const generate = generateMarkdown(data);

    writeToFile(fileName, generate);
  });
}

// Function call to initialize app
init();
