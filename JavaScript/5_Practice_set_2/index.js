// Chapter 2PS
// Problem No 1

// let age = prompt("whats your age ?"); // prompt output is string
let age = 10;
if (age <=20 && age >=10) {
    console.log("correct age");
} else {
    console.log("Not a valid age");

}

// Problem No 2
let b = 10;
switch (true) {
    case b<=20 && b >=10 :
        console.log("correct age");
        break;
    default:
        console.log("Not a valid age");
}

// Problem No 3

let c = "6";
let num = Number.parseInt(c)
if (num % 2 == 0 && num % 3 == 0) {
    console.log("Number is divisible by 2 and 3")
} else {
    console.log("Number is not divisible by 2 and 3")
}

// Problem No 4

let d = "6";
let number = Number.parseInt(c)
if (number % 2 == 0 || number % 3 == 0) {
    console.log("Number is divisible by 2 or 3")
} else {
    console.log("Number is not divisible by 2 or 3")
}

// Problem No 5

let myAge = 5;
myAge >=18 ? console.log("You are a major") : console.log("You are a minor");