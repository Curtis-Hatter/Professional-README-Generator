const inquirer = require("inquirer");
const fs = require("fs");

const licences = new Map([['MIT', 'https://img.shields.io/badge/License-MIT-yellow.svg']])


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
            choices: ["MIT", "IBM", "Apache 2.0", "GNU GPL", "N/A"],
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
    console.log(response.license[0]);
    if (response.license[0] !== 'N/A' || response.license.length > 1 || response.license[0] !== 'undefined') {
        // console.log("break");
        for (const [name, image] of licences) {
            // console.log("broke");
            content = content.replace("## Description", `![${name}](${image}).`);
        }
    }
    return content;
}