const readline = require("readline-sync")
var weight = 61;
var height = 170;
var bmi = weight / (height/100) **2;

console.log("Hello! Your BMI is = "+bmi);
