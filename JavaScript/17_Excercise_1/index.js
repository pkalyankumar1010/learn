let rand_number = Math.random()*100
let input_number = prompt("Enter a number")
input_number = Number.parseInt(input_number)
let guess_count = 100
while (input_number !== rand_number) {
    guess_count -= 1
    if (guess_count == 0) {console.log("Your guesses are over"); break}
    if (input_number > rand_number) {
         console.log("Your number is greater than the correct number")
    } else {
        console.log("Your number is less than the correct number")
    }
    console.log("You have " + guess_count + "guesses left")
    
}
console.log("You have guesses the number in "+ 100 - guess_count)