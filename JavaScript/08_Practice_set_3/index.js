let marks_of_students = {
    kalyan : 98 , 
    kiran : 99 , 
    suma : 100
}
// Problem 1
for (let i = 0 ; i < Object.keys(marks_of_students).length;i++) {
    console.log("Marks of "+ Object.keys(marks_of_students)[i] + " are " + marks_of_students[Object.keys(marks_of_students)[i]]);

}
// For in loop made above thing easier
for (let key in marks_of_students) {
    console.log("marks of " + key + " are " + marks_of_students[key]);
}

// Problem 3
let cn = 4
let i = 4;

while ( i != cn) {
    i = prompt("Enter a number")
    console.log("Try again")
}
console.log("You have entered correct number")

// Problem No 4

const mean = (a,b,c,d,e) => {
    return (a+b+c+d+e)/5
}
console.log(mean(1,2,3,4,5))