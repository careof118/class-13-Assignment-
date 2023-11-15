
// Solve the problem with Javascript  to find the maximum between two numbers. (Hint: take 2 variables and find the maximum number between them)

let number1 = 100;
let number2 = 120;

let maxNumber = (number2 > number1) ? number2 : number1; {

    console.log("Maxium Number", maxNumber)
}


// Solve the problem with Javascript  to check whether a number is negative, positive or zero. (take single variable and check using if esle condition)

let num = -5;

if (num < 0) {
    console.log(num + " is negative");
} else if (num > 0) {
    console.log(num + " is positive");
} else {
    console.log(num + " is zero");
}


// Solve the problem with Javascript  to check whether a number is divisible by 10 or not. (take single variable and check using if esle condition)

let num = 30;

if (num % 10 === 0) {
    console.log(num + " is divisible by 10");
} else {
    console.log(num + " is not divisible by 10");
}


// Solve the problem with Javascript  to check whether a number is even or odd. 

let num = 15;

if (num % 2 === 0) {
    console.log(num + " is even");
} else {
    console.log(num + " is odd");
}


// Solve the problem with Javascript  to check whether the temperature is hot, cold or normal. (30 <=  is hot, 25 >= is cold , anyother value is normal)

let temperature = 28;

if (temperature >= 30) {
    console.log("It's hot!");
} else if (temperature <= 25) {
    console.log("It's cold!");
} else {
    console.log("It's normal.");
}


// Solve the problem with Javascript  to find a maximum between three numbers. (Hint: take 3 variables and find the maximum number between them use logical and operator for that)


let num1 = 15;
let num2 = 30;
let num3 = 20;

let maxNumber = num1;

if (num2 > maxNumber) {
    maxNumber = num2;
}

if (num3 > maxNumber) {
    maxNumber = num3;
}

console.log("The maximum number is: " + maxNumber);



// Write a JavaScript expression using the ternary operator that checks if a number x is even or odd. Store the result in a variable and print “Even Number” or “Odd Number”.


let x = 27;

var result = (x % 2 === 0) ? "Even Number" : "Odd Number";

console.log(result);


// Use the logical AND operator to determine if two variables, numOne and numTwo, are both greater than 30. Print a message to the console reflecting the result.

let numOne = 40;
let numTwo = 35;

if (numOne > 30 && numTwo > 30) {
    console.log("Both numOne and numTwo are greater than 30.");
} else {
    console.log("At least one of numOne or numTwo is not greater than 30.");
}


// Write a JavaScript program that uses if-else statements combined with logical operators. The program should check if a person’s age is between 13 and 19. If so, print “Teenager”. Otherwise, print “Not a teenager”. (Hint: Combining If-Else and Logical Operators)

if (age >= 13 && age <= 19) {
    console.log("Teenager");
} else {
    console.log("Not a teenager");
}
