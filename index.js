//packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const util = require("util");

const generatorMarkdown = require('./util/generateMarkdown');


// array of questions for user input
const questions = [{
        type: "input",
        message: "Please enter the title of your app",
        name: "Title"
    }, {
        type: "input",
        message: "Please give a detailed description of your app",
        name: "Description"
    }, {
        type: "input",
        message: "Please enter 'Table of Contents' ",
        name: "Table of Contents"
    }, {
        type: "input",
        message: "Please enter installation dependencies to run this app",
        name: "Installation"
    }, {
        type: "input",
        message: "Please enter instructions about proper usage of this app",
        name: "Usage"
    }, {
        type: "input",
        message: "Please enter the name of license used for this app",
        name: "License"
    }, {
        type: "input",
        message: "Please enter the names of contributors",
        name: "Contributing"
    }, {
        type: "input",
        message: "Please enter the commands needed to test this app",
        name: "Tests"
    }, {
        type: "input",
        message: "Contact info for inquiries.",
        name: "Questions"
    }, {
        type: 'input',
        message: "Please enter your Github username",
        name: 'Username'
    }, {
        type: 'input',
        message: "Please enter your email address",
        name: 'Email'
    },

]

// function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("success")
        }
    })

}





// function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile("README.md", generatorMarkdown(data));
            console.log(data)

        })

}

// function call to initialize app
init();