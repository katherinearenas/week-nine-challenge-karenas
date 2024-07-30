// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return ""
  } else {
    return `## License

    This project is licensed under the ${license} license.
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
    return '<strong>##License</strong>'
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data.title)
    return `
      * [Installation](#installation)
   * [Usage](#usage)
   * [Tests](#tests)
   * [Description](#description)
   ${renderLicenseLink(data.license)}
  
    #${data.title}

    <strong>##Description</strong>
    ${data.description}

    <strong>##Installation</strong>
    ${data.install}

     <strong>##Contributing</strong>
    ${data.contribution}

     <strong>##Tests</strong>
    ${data.testing}

    ${renderLicenseSection(data.license)}
    `;
}

module.exports = generateMarkdown;
