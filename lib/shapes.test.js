// Jest tests for shapes
 const { Triangle, Circle, Square } = require("./shapes");

// Triangle
// describe("Triangle", () => {
//   test("renders correctly", () => {
//     const shape = new Triangle("green", "Triangle");
//     const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
//             <polygon points="150, 18 244, 182 56, 182" fill="green" />
//             <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">Triangle</text>
//         </svg>`;

//     expect(shape.render()).toBe(expectedSVG);
//   });
// });

// Circle
// describe("Circle", () => {
//     test("renders correctly", () => {
//         const shape = new Circle("blue", "green", "Circle");
//         const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
//                 <polygon points="150, 18 244, 182 56, 182" fill="blue" />
//                 <text x="150" y="125" font-size="60" text-anchor="middle" fill="green">Circle</text>
//             </svg>`;
    
//         expect(shape.render()).toBe(expectedSVG);
//       });
// });

// Square
// describe("Square", () => {
//     test("renders correctly", () => {
//         const shape = new Square("borwn", "white", "Square");
//         const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

//         <rect x="50" height="150" width="150" fill="brown " />
      
//         <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">poo</text>
      
//       </svg>`;
    
//         expect(shape.render()).toBe(expectedSVG);
//       });

// });
