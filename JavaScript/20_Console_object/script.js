console.log("from script.js")
console.log(console)
console.assert(1===1) // undefiend
console.assert(1>1) // error
console.error("This is a error");
console.clear()
obj = { a:1 , b:2 , c:3}
console.log(obj)
console.table(obj)
console.time("a")
for (let i = 0 ; i<100; i++) {
    console.log("hello")
}
console.timeEnd("a")