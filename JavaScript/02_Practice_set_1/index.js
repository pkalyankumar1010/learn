// Q1
let a = "string"
let b = 10
console.log(a + b) // gets converted to string

// Q2
console.log(typeof (a+b))

// Q3
const c = {
    name : "Kalyan",
    section : 1,
    isStudent : true
}
try {c = "some value"}  catch {} // Not possible to chage it to differnt data type 
try {c = {}} catch {} // Not posiible
// c is refrence to the object  

// Q4
c['freind'] = "Pavan"
console.log(c)

// Q5
const d = {
    word1 : "meaning1",
    word2 : "meaning2",
    word3 : "meaning3",
    word4 : "meaning4",
    word5 : "meaning5"
}
console.log(d["word1"])
