// Conditional expression
// if phone number or email in facebook page serach in correspoding database


try {let a = prompt("Hey whats your age ?"); } catch {}
// Works in browser and replit , not working here

let a = "45";
a = Number.parseInt(a)
console.log(a , typeof (a))
if (a>0) {
    try {alert("This is voter age")} catch {}
}
else {
    try {alert("This is invalid age");} catch {}
}
// if 
if (1 ===1 ) {}
// if else
if (1 === 1 ) { } else {}
// if elsif else
if (1 ==2) {} else if  (1 ===3 ) {} else {}
// Same line or multiline
if (1 ==2) {} 
else if  (1 ===3 ) {} 
else {}
// Switch case home work 
// mdn - Mozilla js docs
let  k = 5;
switch (k) {
    case 10 :
        console.log("value is  10")
        break; // break is needed else every case runs after sucess case
    case 5 :
        console.log("value is 5")
    default :
        console.log("vaue is not 5 or 10")
}

// Ternary Operator
console.log("You can ", k < 18 ? "not drive": "drive")
// condition ? true value : false value