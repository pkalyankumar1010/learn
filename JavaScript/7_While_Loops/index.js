// While loop may never end can crash you computer
let n = "10";
n = Number.parseInt(n)

let i = 0;
while (i<n) {
    console.log(i);
    i++;
}

// do while loop runs atleast once , code runs first and condition checked second
do {
    console.log(i);
    i++;

} while (i < 20)