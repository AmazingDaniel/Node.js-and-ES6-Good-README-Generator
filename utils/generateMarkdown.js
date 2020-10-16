// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description 

${data.description}

## Table of Contents

If your README is very long, add a table of contents to make it easy for users to find what they need.

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#test)
* [Questions](#questions)


## Installation

${data.installation}


## Usage 

${data.usageInformation }


## License

${data.license === "MIT"  ? "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)" : data.license === "IBM" ? "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)" : "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)" }


---



## Contributing

${data.contribution}

## Tests

${data.test}

## Questions

github Profile: ${data.gitHubProfile}

email: ${data.email}

---
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.



`;
}

module.exports = generateMarkdown;
