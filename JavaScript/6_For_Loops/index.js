// Program to add first n natural numbers
let sum = 0 ;
let n = 100;

for (let i = 1 ; i <= n ; i ++) {

    console.log(i);
    sum += i ;
    console.log("sum of first "+ i +" Natural number is", sum);
}

// For in loop

let obj = {
    kalyan : 10,
    kiran : 8,
    suma : 5,
    raj : 9
}
for (let a in obj) {
    console.log("Keys of obj are " + a + ", Values are " + obj[a]);
}

// For off loop th obj should be iterarable like string or array
// Works on arrays and strings
for (let b of "kalyan") {
    console.log(b);
}


