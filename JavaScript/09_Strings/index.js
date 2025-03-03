let userName = "kalyan";
console.log(userName.length)
console.log(userName[0]);
console.log(userName[1])

let friendName = 'pavan';
console.log(friendName)
// let friendName = "Pavan' // Dont do this

// Template literals
let boy1 = "kalyan";
let boy2 = "kiran";
// Kiran is brother of kalyan
let sentence = `"${boy2}" is brother of '${boy1}'`; // Inserting variables is called string interpolation
console.log(sentence)

// Escape sequnce charachters
let fruit = ' Ba\na\'na \t fruit\"s' // \' single quote , \n newline , \t tab , \" double quote
console.log(fruit)