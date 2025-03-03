// Practixe set 4
let str = "kal\t";

const sentence = "The quick brown fox jumps over the lazy dog.";

// Problem no 2
const word = "fox";
console.log(
  `The word "${word}" ${sentence.includes(word) ? "is" : "is not"} in the sentence`,
);
// Problem no 3
console.log(word.toUpperCase())
// Problem no 4
let str2 = "The amont is Rs 1000";
let amount = str2.slice("The amont is Rs ".length)
console.log(amount)
console.log(typeof (amount))
amount = Number.parseInt(amount)
console.log(typeof amount)

// Problem 5
let frined = "Pavan";
frined[3] = "d" // string is immutable and cannot be changed
console.log(frined)
