const inquirer = require("inquirer");
const fs = require("fs");

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
        const content = `# ${response.title}\

        ## Description

        ${response.description}\
        
        ## Installation 
        
        ${response.installation}\
        
        ## Usage
        
        \`\`\`
        ${response.usage}
        \`\`\`
        `

        fs.writeFile("README.md", content, function (err) {
            if (err) throw err;
            console.log("File Created!");
        })
        // console.info("Answers", response)
    });