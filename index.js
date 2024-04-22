// Runs the application using imports from lib
// fs is a Node standard library package for reading and writing files
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
    // text color
    {
      type: "input",
      name: "textColor",
      message: "please input text color",
    },
    //shape color
    {
      type: "input",
      name: "shapeColor",
      message: "please input shape color",
    },
    //text
    {
      type: "input",
      name: "text",
      //limit 3 letters of text
      message: "please input text",
    },
  ])
  .then((answers) => {
    let shape;
    if (answers.shape === "Circle") {
      shape = new Circle(answers.shapeColor, answers.textColor, answers.text);
    } else if (answers.shape === "Triangle") {
      shape = new Triangle(answers.shapeColor, answers.textColor, answers.text);
    } else {
        shape = new Square(answers.shapeColor, answers.textColor, answers.text);
    }

    fs.writeFile("logo.svg", shape.render(), (err, result) => {
      if (err) throw err;
      console.log("svg created");
    });
  });
