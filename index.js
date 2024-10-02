let name = "Kanhav"; // string literal
console.log(name);
const interestRate = 0.3;
console.log(interestRate);
let age = 30; //number literal
let isApproved = false; //boolean literal
let firstName = undefined; 
let person = {
    name: "Kanhav", 
    age: 18
} //object literal

//Dot notation --> default choice
person.name = "John";

//bracket notation --> don't know name of property
let selection  = "name";
person[selection] = "Mary";
console.log(person.name);

let selectedColor = ['red', "blue"]; //Array literal 
selectedColor[2] = 1;
console.log(selectedColor.length);







