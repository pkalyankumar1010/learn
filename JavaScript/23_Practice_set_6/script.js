
// Problem No 1
let age = Number.parseInt(prompt("What is your age ?"));
alert("You " + (age < 18 ? "cannot" : "can") + " drive");

// Problem No 2
let askPrompt = true
let enterAge;
while (askPrompt) {
    askPrompt = false;
    enterAge = Number.parseInt(prompt("What is your age ?"));
    if (enterAge < 0) {console.error("Please enter a valid age"); break;} // Problem No 3
    alert("You " + (enterAge < 18 ? "cannot" : "can") + " drive");
    askPrompt = confirm("Do you want to check again ?")
}

// Problem No 4
if (enterAge > 20) {
    location.href = "https://www.royalenfield.com/in/en/motorcycles/" ; // No back button when using this
}
 
// Problem No 5
let col = prompt("enter a colour");
document.body.style.background = col;


