const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
// import { generateMarkdown } from './utils/generateMarkdown.js';

// array of questions for user
const questions = [
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
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) throw err;
        console.log("File Created.");
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((data) => {
        const readmeFile = generateMarkdown(data);
        writeToFile("README.md", readmeFile);
    })
}

// function call to initialize program
init();
