// import fs a standary lib pacjage for reading and writing files 
// import inquirer  from prompting the user for input 
//import circle, triangle and square classes from shapes.js file 
const fs = require("fs");
const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require("./lib/shapes");

inquirer
  .prompt([
    {
      type: "list",
      name: "shape",
      message: "please select from the following shapes: ",
      choices: ["Circle", "Triangle", "Square"],
    },
    // text color prompt
    {
      type: "input",
      name: "textColor",
      message: "please input text color",
    },
    //shape color prompt
    {
      type: "input",
      name: "shapeColor",
      message: "please input shape color",
    },
    //text prompt
    {
      type: "input",
      name: "text",
      //limit 3 letters of text
      message: "please input text",
    },
  ])

  //It conditionally creates an instance of the selected shape class based on the user's choice."
  .then((answers) => {
    let shape;
    if (answers.shape === "Circle") {
      shape = new Circle(answers.shapeColor, answers.textColor, answers.text);
    } else if (answers.shape === "Triangle") {
      shape = new Triangle(answers.shapeColor, answers.textColor, answers.text);
    } else {
        shape = new Square(answers.shapeColor, answers.textColor, answers.text);
    }
    // writes the SVG logo of the shape to a file named logo.svg 
    fs.writeFile("logo.svg", shape.render(), (err, result) => {
      if (err) throw err;
      console.log("svg created");
    });
  });
