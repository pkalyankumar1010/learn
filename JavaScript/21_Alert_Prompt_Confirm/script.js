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
