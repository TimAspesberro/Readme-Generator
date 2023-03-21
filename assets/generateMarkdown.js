// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license){
    return '';
  } else {
    return license.badge;
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
function renderLicenseSection(license) {
  if(!license){
    return '';
  }else{
    return license;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data}
`;
}

module.exports = generateMarkdown;
