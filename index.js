const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios")
const writeFileAsync = util.promisify(fs.writeFile);
const generateMarkdown = require("./utils/generateMarkdown.js");
//const Choices = require("inquirer/lib/objects/choices");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "Enter your project title name?"
    },
    {
        type: "input",
        name: "description",
        message: "Enter project description."
    },
    {
        type: "input",
        name: "installation",
        message: "Enter installation instructions for your project."
    },
    {
        type: "input",
        name: "usageInformation",
        message: "Enter usage information that you did for the project"
    },
    {
        type: "input",
        name: "contribution",
        message: "Enter contribution guidelineson for your project"
    },
    {
        type: "list",
        name: "license",
        message: "Choice license for project.",
        choices: ["MIT", "IBM", "Apache"]
    },
    {
        type: "input",
        name: "test",
        message: "provide tests for your README.",
        
    },
    {
        type: "input",
        name: "username",
        message: "What's your Github username?"
    },
    {
        type: "input",
        name: "email",
        message: "Type in your email."
    },

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, error => {
        if (error) {
            return console.log(error);
        }
        console.log("Success!")
    });
}

// function to initialize program
function init() {
    try {

        inquirer.prompt(questions).then(function(data){
          
            axios.get("https://api.github.com/users/"+ data.username).then(function(response){
                data.gitHubProfile = response.data.html_url
                const readMeContent =  generateMarkdown(data);
     
                writeToFile("./README.md", readMeContent)
             
                 console.log("Successfully wrote to README.md");
            })

          
        })

    
      } catch(error) {
        console.log(error);
      }

};

// function call to initialize program
init();
