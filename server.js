// i need inquirer package
// write to file
//GIVEN a command-line application that accepts user input
//WHEN I am prompted for text
//THEN I can enter up to three characters
//WHEN I am prompted for the text color
//THEN I can enter a color keyword (OR a hexadecimal number)
//WHEN I am prompted for a shape
//THEN I am presented with a list of shapes to choose from: circle, triangle, and square
//WHEN I am prompted for the shape's color
//THEN I can enter a color keyword (OR a hexadecimal number)
//WHEN I have entered input for all the prompts
//THEN an SVG file is created named `logo.svg`
//AND the output text "Generated logo.svg" is printed in the command line
//WHEN I open the `logo.svg` file in a browser
//THEN I am shown a 300x200 pixel image that matches the criteria I entered

// TODO: Include packages needed for this application

const inquirer = require("inquirer") ;
const fs = require("fs");
const path = require("path");
const {promptUser} = require("./utility/template.js");

//const { default: inquirer } = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'list',
        name: 'Shape',
        message: 'triangle square circle?'
    },

    {
        type: 'input',
        name: 'Color',
        message: 'What color shape do you want?'
    },

    {
        type: 'input',
        name: 'text input',
        message: ' What 3 text characters do you want?'
    },


   



];

// TODO: Create a function to make logo
function writeToFile(fileName, data) { 
    return fs.writeFileSync(path.join(process.cwd(), fileName),data);
}

// TODO: Create a function to initialize app
function init() {
    promptUser().then((responses)    => {
      console.log("Creating Professional logo.svg File...");
    
    });
  }
// Function call to initialize app
init();