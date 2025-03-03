let a = 1;
let b = 2;
let c = 3;

console.log("One plus Average of a and b is ", 1 + (a+b)/2);
console.log("One plus Average of b and c is ", 1 + (b+c)/2);
console.log("One plus average of a and c is ", 1 + (a+c)/2);

function onePlusAvg (x,y) {
    return 1 + (x+y)/2

}
console.log("One plus Average of a and b is ", onePlusAvg(a,b));
console.log("One plus Average of b and c is ", onePlusAvg(b,c));
console.log("One plus average of a and c is ", onePlusAvg(a,c));

// Arrow function with args
const sum = (p,q) => {
    return p + q;
}
console.log(sum(1,2))

// function without input args
const hello = () => {
    console.log("hello");
}
hello()