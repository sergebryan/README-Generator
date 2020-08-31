function renderBadge(license){
  return `![Github License](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`
}


function generateMarkdown(data) {
  return `
  # Project Title: 
  ${data.title}

  ## Description of Project: 
  ${data.description}

  ## Table of Contents
   
  * [Installation](#install)
  * [Usage](#usage)
  * [Licensing](#licensing)
  * [Contributing Developers](#contributors)
  * [Testing](#testing)
  * [Questions](#questions)
  
  ## Installation
  ${data.install}

  ## How to use this application:
  ${data.usage}

  ## Contributing Developers
  ${data.contributors}

  ## Testing
  ${data.testing}

  ## Licensing
  ${renderBadge(data.license)}
  Copyright © 2020 <copyright holders>



The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.



  ## Questions?

  If you have any questions, please contact ${data.username} on GitHub.

`;
}

module.exports = generateMarkdown;
