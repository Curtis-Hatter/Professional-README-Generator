//readme content

//licenses for user
const licenses = new Map([['MIT', 'https://img.shields.io/badge/License-MIT-yellow.svg'], ['IBM', 'https://img.shields.io/badge/License-IPL%201.0-blue.svg'], ['Apache 2.0', 'https://img.shields.io/badge/License-Apache%202.0-blue.svg'], ['GNU GPL 3.0', 'https://img.shields.io/badge/License-GPL%20v3-blue.svg']]);

// function to generate markdown for README
function generateMarkdown(data) {
  let content = `# ${data.title}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribute](#contribute)
- [Testing](#testing)
- [Questions](#questions)

<a name="description"></a>
## Description

\`\`\`
${data.description}
\`\`\`

<a name="installation"></a>
## Installation 

\`\`\`
${data.installation}
\`\`\`

<a name="usage"></a>
## Usage

\`\`\`
${data.usage}
\`\`\`

<a name="contribute"></a>
## Contribute

\`\`\`
${data.contribute}
\`\`\`

<a name="testing"></a>
## Testing

\`\`\`
${data.testing}
\`\`\`

<a name="questions"></a>
## Questions

Email: [${data.email}](${data.email})

GitHub: [${data.github}](${data.github})

`;
  return addingLicense(data, content);
}

function addingLicense(response, content) {
  // console.log(response.license[0]);
  // handle any error suchas "N/A" or undefine input
  if (response.license[0] !== 'N/A' || response.license.length > 1) {
    if (response.license[0] !== undefined) {
      // console.log("break");
      let userChoiceofLicenses = '';
      //depending on user choice of license create a string to replace content in readme with license images
      for (const [name, image] of licenses) {
        for (let i = 0; i < response.license.length; i++) {
          if (response.license[i] === name) {
            userChoiceofLicenses = userChoiceofLicenses + `![${name}](${image}) `;
          }
        }
        // console.log(userChoiceofLicenses);
      }
      content = content.replace("## Table of Contents", userChoiceofLicenses + '\n\n## Table of Contents');
    }
  }
  return content;
}

module.exports = generateMarkdown;
