const inquirer = require("inquirer");
const fs = require("fs");

const licenses = new Map([['MIT', 'https://img.shields.io/badge/License-MIT-yellow.svg'], ['IBM', 'https://img.shields.io/badge/License-IPL%201.0-blue.svg'], ['Apache 2.0', 'https://img.shields.io/badge/License-Apache%202.0-blue.svg'], ['GNU GPL 3.0', 'https://img.shields.io/badge/License-GPL%20v3-blue.svg']]);


inquirer.
    prompt([
        {
            type: "input",
            message: "What's the title of your README.md?",
            name: "title",
            default: "Application"
        },
        {
            type: "input",
            message: "Give me a brief description of your application: ",
            name: "description",
            default: "I'll put in a description later."
        },
        {
            type: "input",
            message: "How would one install this application?",
            name: "installation",
            default: "I'm kind of lazy right now."
        },
        {
            type: "input",
            message: "How do you use this application?",
            name: "usage",
            default: "Don't bother me."
        },
        {
            type: "input",
            message: "How would one contribute to this application?",
            name: "contribute",
            default: "Don't try and take credit for my work!"
        },
        {
            type: "input",
            message: "How could someone test this application?",
            name: "testing",
            default: "Installing it, DUH!"
        },
        {
            type: "checkbox",
            name: "license",
            message: "Are you licensed? (Press SPACEBAR to checkmark and ENTER confirm)",
            choices: ["MIT", "IBM", "Apache 2.0", "GNU GPL 3.0", "N/A"],
            default: "N/A"
        }
    ])
    .then((response) => {
        let content = `# ${response.title}

## Description

\`\`\`
${response.description}
\`\`\`

## Installation 

\`\`\`
${response.installation}
\`\`\`

## Usage

\`\`\`
${response.usage}
\`\`\`

## Contribute

\`\`\`
${response.contribute}
\`\`\`

## Testing

\`\`\`
${response.testing}
\`\`\`

`
        content = addingLicense(response, content);
        // content.replace(/\s+/g, ' ');
        fs.writeFile("README.md", content, function (err) {
            if (err) throw err;
            console.log("File Created!");
        })
        // console.info("Answers", response)
        // console.log(response);
    });

function addingLicense(response, content) {
    // console.log(response.license[0]);
    if (response.license[0] !== 'N/A' || response.license.length > 1) {
        if (response.license[0] !== undefined) {
            // console.log("break");
            let userChoiceofLicenses = '';
            for (const [name, image] of licenses) {
                for (let i = 0; i < response.license.length; i++) {
                    if (response.license[i] === name) {
                        userChoiceofLicenses = userChoiceofLicenses + `![${name}](${image}) `;
                    }
                }
                // console.log(userChoiceofLicenses);
            }
            content = content.replace("## Description", userChoiceofLicenses + '\n\n## Description');
        }
    }
    return content;
}