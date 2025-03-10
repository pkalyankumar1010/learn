# DataTypes

## 7 Primitive Datatypes
- To store differnce types of data
    - Like storting differnce items like food, pens , mobiles in differnent boxes
    - You can put other items also in differnt box like keeping pens in mobile box 
    - But this is not recommended
- ShortCut -> nn ss bb u
    - null
    - number
    - string
    - symbol
    - boolen
    - bigint
    - undefined
 
    ```js
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
    ```
## Objects or Non primitive DataTypes

- Objects or dictionaries in python are Non prmitive datatypes
    ```js
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
    ```
## Question Set 1

- Create a variable of type string and try to add a number to it
- Use typeof operator to find the datatype of string in last question ?
- Create a const object in JavaScript , Can you change it to hold a number later ?
- Try to add a new key to the const object in 3 , Were you able to do it ?
- Write a program to create a word and meaning dictionary for 5 words
    ```js
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
    ```
# Operators and Expressions

## Expression

- A fragment of code that producues a value is called expression , Everty value written literally is a expression

## Operators
 - Arithmetic Operators
    - Addition +
    - Subtraction -
    - Multiply *
    - Divsion /
    - Exponentional **
    - Increment ++
    - Decrement --
 - Assignment Operators
      - `=` same as  `x = y`
      - `+=` same as `x = x + y`
      - `-=` same as `x = x - y`
      - `*=` same as `x = x * y`
      - `/=` same as `x = x / y`
      - `%=` same as `x = x % y` 
      - `**=` same as `x = x ** y`
 - Comparision operators
      - `==` equal to (type ignore)
      - `!=` not eq to (type ignore)
      - `===` equal to 
      - `!==` not equal to 
      - `>=` gt eq to
 - Logical Operators
      - `||` or 
      - `&&` and
      - `!` not
 - Bitwise operators (operators on each bit)
 - Comments (code that doesn't execute)
   - `let a = 10 ;// Single line comment`
   - `/* Multiline comment*/`


# Conditional Expressions

- IF 
    - just if `if {}`
    - `if () {} else {}`
    - `if () {} else if () {} else {}`

- Switch
    - checks each case and executes
    - break is compulsary
        - else every case runs after the sucess case
    - ```let  k = 5;
        switch (k) {
            case 10 :
                console.log("value is  10")
                break; // break is needed else every case runs after sucess case
            case 5 :
                console.log("value is 5")
            default :
                console.log("vaue is not 5 or 10")
        }
        ```

- Ternary
    - Evalute a condition and do some thing
    - Condition ? True Action : False Action
    - ```let k = 5 ;
        console.log("You can ", k < 18 ? "not drive": "drive")
        ```
## Question Set 2

- Use logical operators to find whether the age of a person lies between 10 and 20 ?
- Demonstrate the use of switch case statements
- Number is divisible by 2 and 3
- Number is divisible by 2 or 3
- Use ternay operator to find major or minor

- ```js
    // Problem No 1

    // let age = prompt("whats your age ?"); // prompt output is string
    let age = 10;
    if (age <=20 && age >=10) {
        console.log("correct age");
    } else {
        console.log("Not a valid age");

    }

    // Problem No 2
    let b = 10;
    switch (true) {
        case b<=20 && b >=10 :
            console.log("correct age");
            break;
        default:
            console.log("Not a valid age");
    }

    // Problem No 3

    let c = "6";
    let num = Number.parseInt(c)
    if (num % 2 == 0 && num % 3 == 0) {
        console.log("Number is divisible by 2 and 3")
    } else {
        console.log("Number is not divisible by 2 and 3")
    }

    // Problem No 4

    let d = "6";
    let number = Number.parseInt(c)
    if (number % 2 == 0 || number % 3 == 0) {
        console.log("Number is divisible by 2 or 3")
    } else {
        console.log("Number is not divisible by 2 or 3")
    }

    // Problem No 5

    let myAge = 5;
    myAge >=18 ? console.log("You are a major") : console.log("You are a minor");
    ```
# For Loops

- To perform repeated actions , to automate tasks

## Types of Loops
- The for loop
    - ```js
        for (statement 1 ; statement 2 ; statement 3) {
                // code to be executed
            }
        ```
    - statement 1 is executed one time
    - statement 2 is condition based on which loop runs
    - statement 3 is executed everytime the loop body gets executed
    - ```js
        // Program to add first n natural numbers
        let sum = 0 ;
        let n = 100;

        for (let i = 1 ; i <= n ; i ++) {

            console.log(i);
            sum += i ;
            console.log("sum of first "+ i +" Natural number is", sum);
        }
        ```
- For in Loop
    - works on objects and arrays
    - ```js
        // For in loop

        let obj = {
            kalyan : 10,
            kiran : 8,
            suma : 5,
            raj : 9
        }
        for (let a in obj) {
            console.log("Keys of obj are " + a + ", Values are " + obj[a]);
        }
        ```
- For off loop
    - works on strigs and arrays , they should be iterable
    - ```js
        // For off loop th obj should be iterarable like string or array
        // Works on arrays and strings
        for (let b of "kalyan") {
            console.log(b);
        }
        ```

# While loops

- While loop
    - runs untill condition is true
    - ```js
        // While loop may never end can crash you computer
        let n = "10";
        n = Number.parseInt(n)

        let i = 0;
        while (i<n) {
            console.log(i);
            i++;
        }
        ```
- do While loop
    - runs atleast once
    - ```js
        // do while loop runs atleast once , code runs first and condition checked second
        let i = 5
        do {
            console.log(i);
            i++;

        } while (i < 20)
        ```

# Functions

- To do repetitive actions
- To make a change it can occur at a single place
- A block of code designed to perform a particular task
- ```js
    function name (paramenter_1 , parameter_2) {
    // parameters work as local variables 
    // name can be any thing 
    }
    ```
- ```js
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
    ```
# Questions set 3

- Write a program to print the marks of a student in an object using for loop 
    `obj = {kalyan : 98 , kiran : 99 , suma : 100}`
- Write a program in q1 using for in loop
- Write a program to print "try again" untill user enter correct numbers
- Write a function to find mean of 5 numbers
- ```js
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
    ```
# Strings

- Collection of characters used to store text 
- Creation
    - `let name = "kalyan" ; // Creates a string`
    - `name.length // This property prints length of the string`
    - Single quotes `let name = 'kalyan'`

## Template literals
- use back tcis instead of quotes
    - \` this is  string \`
- With template literals , it is possible to use single and double quotes in a string
    - \` " hello " hi 'kalyan'\`
- **String interpolation**
    - ```js
        let a = "hi";
        let b = `${a} kalyan`
        ```
- Escape sequence Characters
    - Special characters to do somethings 
    - \t tab , \n newline , \' single quote , \" double quote
    - ```js
        // Escape sequnce charachters
        let fruit = ' Ba\na\'na \t fruit\"s' // \' single quote , \n newline , \t tab , \" double quote
        console.log(fruit)
        ```


# String Methods

- properties
    ```js
    let userName = "kalyan\""; // \" is of 1 length 
    console.log(userName.length) // This is a property
    ```
- functions
    - ```js
        console.log(userName.toUpperCase()) // This is function ()

        // Kalyan , index starts from 0
        console.log(userName.slice(1,3)) // last index not included

        console.log(userName.slice(1)) // if second is not given goes to end

        console.log(userName.replace("kal","kir")) // replace , case sensitive

        let friend = "pavan"
        console.log(userName.concat("is good frined of ",friend , " !")) 

        let friend2 = " satish      ";
        console.log(friend2)
        console.log(friend2.trim()) // removes spaces and newlines
        // Others string methods are present in mdn string docs
        ```

- ***Strings are immutable***
    - ```js
        let a = "ka";
        a[1] = "l";
        console.log(a)
        // All these functions are not mofiying actual srting , string is immutable
        ```
# Practice Set 4

- What will the following print in Javascript ? `console.log("kal\"".length)`
- Explore the includes , startsWith and endsWith functions of a string
- Write a program to correct a given srting to lowercase
- Extract the amount out of this string "Please give Rs 1000"
- Try to change the 4th character of a given string 

```js
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
```
# Arrays

- collection of items (boolean , objects  , strings)
- Arrays are mutable , you can change any value
- Array are objects , typeof return objects
- ```js
    let marks_class_10 = [1,2,3,4, null, false , "Not present"];
    console.log(marks_class_10)
    console.log(marks_class_10[7]) // will be undefined beacuse index does not exits
    console.log("Length of array is "+marks_class_10.length)

    // modifying value
    marks_class_10[7] = 89 // Addding a new value to array
    console.log(marks_class_10[7])
    marks_class_10[1] = 98 // Modifying value , Arrays are mutable
    console.log(marks_class_10)
    console.log(typeof marks_class_10)
    ```
# Array Methods

- toString() - converts array to string with ,
- join() - joins with delimeter and converts to string
- pop()
- push()
- shift()
- unshift()
```js
// Array Methods
let num = [1,2,3,34,7];
console.log(num)
// toString
let b = num.toString() // b is a string
console.log(b)
// join
let c = num.join("_")
console.log(c, typeof c)
// pop
let d = num.pop() // removing last element of array
console.log(d , num)
// push
let e = num.push("hello") // return new array length
console.log(e, num)
// shift
let f = num.shift() // removes first eleemt
console.log(f,num)
// unshift
let g = num.unshift("kiran") // adds at starting
console.log(g,num)
```
- delete - Operator

- concat
- sort
- reverse
- splice
- slice
```js
// delete
console.log(num, num.length)
delete num[0]
console.log(num, num.length)

// concat -> Join multiple arrays
let num2 = [6,7,89,0]
let newArray = num.concat(num2,num,num2) // Not modifying old array
console.log(newArray)

// sort method
let unsor  = [ 3 ,4,5,9,1,2,0,123]
unsor.sort() // string sort
console.log(unsor)
// sort takes a argument called compare function 
let compare = (a,b)=>{
    return a-b // b - a for  decesding order
}
unsor.sort(compare)
console.log(unsor)

// reverse
unsor.reverse()
console.log(unsor)

// Splice and Slice

// Splice -> to add new elements
// 3 args -> where to add , how many to delete , values to add
let deleted_values =num.splice(2,2,898989898,111111,909090)
console.log(deleted_values,num)

// Slice
// cuts and creates a array
console.log(num.slice(2,4),num)
console.log(num.slice(2),num)
```
# Loops in arrays

- .forEach -> to do something for each element
- Array.from(string) -> makes aaray
- for of  -> prints values
- for in -> prints keys
```js
let num = [ 3, 23 , 1 , 2 ,6]
for (let i = 0 ; i <num.length;i++){
    console.log(num[i])
}

// For Each loop
num.forEach((element) => {
    console.log(element * element)
})

// Array.from -> used to create array from any other object like html object
// Used in html to go throuh html Collection - . document.getElecmentbyCLassName("input")
let userName = "kalyan";
let arr = Array.from(userName);
console.log(arr)

// for of -> easier way
for (let i of num) {
    console.log(i)
}
// for in
for (let i in num) {
    console.log(i) // giving indexes
    // array is object with keys 0,1,2,3 and values are array elements
    // on object in prints keys
}
```
# Map Filter Reduce
 - higher order methods

## Map
 - creates a new array by performing some action on each element
    - forEach does not do this , but you can just iterate though it 
    - let a = num.forEach is not possible 
    - ```js
        // Map Filter Reduce - higher order methos
        let arr = [45 , 23 , 44]
        console.log(arr)
        // Array Map method
        // .map creates new array .forEach modifies the same array
        let newarr = arr.map((value,index,array)=> {
            console.log(value,index,array) // index and array are optional args
            return value*value
        })
        console.log(newarr)
        ```
## Filter
 - 
    - Does some filtering based on a function and makes new array
    - ```js
        // Filter
        let arr2 = [0,3,5,45,56,78]
        let newarr2 = arr2.filter((value)=> {
            return value<10
        })
        console.log(newarr2)
        ```
## Reduce
 - Traverses through the array and returns smaller dimesion value
 - ```js
    // Reduce method
    let arr3  = [0,3,5,4,6,7]
    let newarr3 = arr3.reduce((value1,value2)=> {
        return value1 + value2
    // it takes first two values and runs the function and takes the output and runs on 3 element and continues
    })
    console.log(newarr3)
    const sum = (a,b) => {
        return a + b
    }
    console.log(arr3.reduce(sum)) // same as giving function inside
    ```

# Practice set 5

- Create an array of numbers and take input from user and add into array
- Keep adding numbers to array untill zero is added
- Filter for numbers divisible by 10
- Create an array of square of the numbers
- Use reduce to calculate factorial of a given number from an array of first n natural numbers (n being te number whose factorial needs to be calculated)

- ```js

    // Problemm No 1
    let arr = [1,2,3,4]
    let a = prompt("Enter a number")
    a = Number.parseInt(a)
    arr.push(a)
    console.log(a)

    // Problem No 2
    let arr2 = [  3, 4]
    let b = prompt("Enter a number");
    b = Number.parseInt(b)
    while (b!= 0) {
        if (!isNaN(b)) {arr2.push(b)}
        b = prompt("Enter a number")
        b = Number.parseInt(b)
    }
    console.log(arr2)
    // If 0 also should be added
    let c;
    let arr3 = [4,5]
    do {
        c = prompt("Enter a number");
        c = Number.parseInt(c)
        arr3.push(c)
    } while (c!=0)
    console.log(arr3)

    // Problem No 3

    let d = [10,9,8,90,80,5,50]
    let d_new = d.filter((value)=>{
        return value%10 == 0
    })
    console.log(d_new)

    // Problem No 4
    let e  =[ 1,2,3,4]
    let e_new = e.map((value)=> {
        return value*value
    })
    console.log(e_new)

    // Problem No 5
    let f = [1,2,3,4]
    let f_new = f.reduce((value1,value2)=>{
        return value1*value2
    })
    console.log(f_new)
    ```
# Excerise 1 - Guess the number

- Write a Javascript program to generate a random number ad store it in a variable . The program then takes an input from the user to tell them whether the guesss was correcr , greater or lesser than the original number
- 100 (number of guesses) is the score of the user , The program is expected to termiante once the number is gussed , Number should be between 1-100
- ```js
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
    ```
# Javascript in the browser
- Made to make web pages alive
- web page is a combination of html , css and js
    - HTML skeleton
    - js functionality
    - css styling
- Browser has buit in Javascript engine
    - It has limited features 
        - It cannot read files automtically
        - It has limited saftey

## Developer tools
- Which makes develpoing easy
- Elements 
    - All Html elements
- Console
    - console satements output is present here
- Network  
    - All network requesnt are present here

# Script tags
- Why to use muliple script tags
    - code can be split in to multiple files
    - if files are not changed it will not load already loaded js
        - This is called ***browser Caching***

- Two ways of running js
    - giving a file
        - ```html
            <script src="script.js"></script>
            ```

    - writing code in script tag
        - ```html
            <script>
                // I can write js code here
                console.log("Code from inside the tag")
            </script>
            ```
    - Both cannot be done at same time
        - ```html
            <script src="script.js">
                console.log("Trying to executr both") // This is ignored
            </script>
            ```
# Console
- Console object has many methods , log is one of them
    - assert() -> used to assert a staement , returns undefined when true else error
    - clear() -> clears the console
    - log() -> outputs a message to the console
    - table() -> displays a tabular data , converts obj to table
    - warn() -> used for warnings
    - error() -> used for errors
    - info() -> for info
    - time("some label") -> starts time
    - timeEnd("some label") -> ends time
    - ```js
        console.log(console)
        console.assert(1===1) // undefiend
        console.assert(1>1) // error
        console.error("This is a error");
        console.clear()
        obj = { a:1 , b:2 , c:3}
        console.table(obj)
        console.time("a")
        for (let i = 0 ; i<100; i++) {
            console.log("hello")
        }
        console.timeEnd("a")
        ```


- Following tab can be used to filter warnings , errros and logs
    - ![alt text](image.png)

# Alert Prompt Confirm

- Alert
    - Opens a mini window with message
- Prompt 
    - takes input as a string
    - second arg is a default value which will be aleray present in the text field
    - ```js
        let a = prompt("Enter value of a ",900); 
        ```
- Confirm
    - Asks to confirm and sets true or false
    
- ***We should not use these in UI , use modals Instead***
    - extact location and look these are differnet in different browsers
    - These are old methods
    - Blocks the main execution thread , program doesnot continue to next line of code

- ```js
    console.log("hello");
    alert("your script works");
    let a = prompt("Enter value of a ","900");
    a = Number.parseInt(a)
    let write = confirm("Do you want to write it to the page")
    if (write) {
        document.write(a)

    } else {
        document.write("please allow me to write")
    }
    alert("you enter datatype of " + (typeof (a)))
    ```
# DOM DOM Window object

- Window
    - DOM (Document object Model)
        - html page is made to object and is called DOM
        - window is a global object , we can use window.console.log or console.log
        - document.body displays body as a object
            - ```js
                console.log(document)
                console.log(document.body)
                document.body.style.background = "red" // to change colurs
                ```

    - BOM (Browser Object Model)
        - repersents additional objects provided by the browser (host environment maybe laptop, mobile) for working with everythng except the document
        - functions like alert/prompt/confirm are part of this , they are not part of nodejs
        - function like location.href = "https://sumathi.dev"
        
    - Javascript Core

# Practice Set 6

- Write a program using prompt function to take inut of age as a value from the user and use alert to tell him if he can drive
- In Q1 add a confirm to run again and again
- In Q2 use console.error if age is negative
- If user is over 20 redirect him to bike website
- Change the colour of page using prompt



```js

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




```
# Exercise 2 Snake Water Gun

- Use Javascript to create a game of snake , water & gun . The game should ask you to enter S,W or G . The computer should be able to randomly generate S,W or G and declare win or loss using alert . Use confirm and prompt wherever required

```js
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
```

- DOM refers to the HTML page where all the nodes are objects , There can be 3 main types of nodes in the DOM tree
    - text nodes
    - element nodes
    - comment nodes
