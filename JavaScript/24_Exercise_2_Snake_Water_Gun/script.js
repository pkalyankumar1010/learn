validInputs = [ "S" , "W" , "G"]

let askAgain = true;
function check(user, computer) {
    if (user === computer) return "It's a tie!";
    if (
        (user === "S" && computer === "W") ||
        (user === "W" && computer === "G") ||
        (user === "G" && computer === "S")
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}
while (askAgain) {
    askAgain = false;
    let input = prompt("Enter S or W or G").toUpperCase();
    let comp_input = validInputs[Math.floor(Math.random() * (2 - 0 + 1)) + 0];
    document.write(input)
    if (validInputs.includes(input)) { alert(check(comp_input,input)); break}
    else {askAgain = true}
}