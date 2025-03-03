//  nn bb ss u - Primitive DataTypes
let a = null;
let b = 345;
let c = true; // other value is trye
let d = BigInt("567");
let e = "Harry"
let f = Symbol("I am a Symbol");
let g = undefined // same as let g
console.log(a,b,c,d,e,f,g)
console.log(typeof d)

// Objects in Js - Non primitve DataTypes

const item = {
    "Kalyan" : true,
    "Kiran" : false,
    "Rajendra" : 10,
    "Sumathi" : undefined
}

console.log(item["Kalyan"]) //value from dictionary
console.log(item["Ka"]) // undefined
// Objects Used for mapping items 