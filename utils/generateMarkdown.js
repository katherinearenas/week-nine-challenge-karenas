// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return ""
  } else {
    return `
    ![License Badge]https://img.shields.io/badge/License-${license}-blue
    `;
    }
  }



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None'){
    return '* [License](#license)'
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None'){
    return `##License 
    <hr>
    This project is licensed under the ${license} license.`
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data.title)
    return `
    #${data.title}
    <hr>
    ##Table of Contents
    <hr>
   * [Description](#description)
   * [Installation](#installation)
   * [Usage](#usage)
   * [Contributions](#contribution)
   * [Tests](#tests)
   * [Questions](#questions)
   ${renderLicenseLink(data.license)}
   
  
    

    ##Description
    ${data.description}

    ##Installation
    ${data.install}

     ##Contributions
    ${data.contribution}

     ##Tests
    ${data.testing}
     ##Questions
     If you have questions you can contact me at:<br>
    ${data.questions}

    ${renderLicenseSection(data.license)}
    ${renderLicenseBadge(data.license)}
    `;
}

module.exports = generateMarkdown;
