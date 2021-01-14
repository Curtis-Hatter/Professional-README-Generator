const inquirer = require("inquirer");

inquirer.
    prompt([
        {
            type: "input",
            message: "What's the title of your README.md?",
            name: "title"
        },
        {
            type: "input",
            message: "What's the title of your README.md?",
            name: "title"
        },
        {
            type: "input",
            message: "What's the title of your README.md?",
            name: "title"
        },
        {
            type: "input",
            message: "What's the title of your README.md?",
            name: "title"
        },

    ])
    .then((response) =>
        console.log(response)
    );