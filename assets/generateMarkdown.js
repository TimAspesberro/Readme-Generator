// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenseBadge) {
  if(!licenseBadge){
    return '';
  }else if(licenseBadge === 'Mozilla Public License 2.0'){
    return '![](./images/mozilla.jpg)';
  }else if(licenseBadge === 'Apache License 2.0'){
    return '![](./images/apache.png)';
  }else if(licenseBadge === 'MIT License'){
    return '![](./images/mit.png)';
  }else if(licenseBadge === 'Boost Software License 1.0'){
    return '![](./images/boost.webp)';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenseLink) {
  if(!licenseLink){
    return '';
  }else if(licenseLink === 'Mozilla Public License 2.0'){
    return 'https://www.mozilla.org/en-US/MPL/2.0/';
  }else if(licenseLink === 'Apache License 2.0'){
    return 'https://www.apache.org/licenses/LICENSE-2.0';
  }else if(licenseLink === 'MIT License'){
    return 'https://opensource.org/license/mit/';
  }else if(licenseLink === 'Boost Software License 1.0'){
    return 'https://www.boost.org/users/license.html';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if(!data){
    return '';
  }else{
    return `
    ${data.license}
    Link: ${renderLicenseLink(data.license)}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Questions](#questions)


  ## Description
    ${data.description}

  ## Installation
    ${data.installation}

  ## Usage
    ${data.usage}

  ## Questions
    GitHub: ${data.github}
    Email: ${data.email}

  ## License
  ${renderLicenseSection(data)}

`;
}

module.exports = generateMarkdown;
