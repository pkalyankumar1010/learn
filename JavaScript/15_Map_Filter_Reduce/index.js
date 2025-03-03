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

// Filter
let arr2 = [0,3,5,45,56,78]
let newarr2 = arr2.filter((value)=> {
    return value<10
})
console.log(newarr2)

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