// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt([
    {
      name: 'title',
      message: 'What is the title of your project?',
      type: 'input',
    },
    {
      name: 'description',
      message: 'Describe the purpose of your application. What was your motivation and what problem does it solve? ',
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
  ])
  .then((data) => {
    const filename = `${data.title.toLowerCase().split(' ').join('')}.md`;
    let titlePrompt = data.title;
    console.log(data.license);

  
  });
}

// Function call to initialize app
init();
