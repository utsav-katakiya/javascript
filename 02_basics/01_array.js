let MyArray = [1, 2, 3, 4, 5, 6]
let MyArray2 = new Array("utsav", "ravi", " vishal")
console.log(MyArray)
console.table([MyArray,MyArray2])

// MyArray.push(7)
// console.log(MyArray)
// MyArray.pop()
// console.log(MyArray)

// MyArray.unshift(4)
// console.log(MyArray)
// MyArray.shift()
// console.log(MyArray)

// console.log(MyArray.includes(7))
// console.log(MyArray.indexOf(8))

// let newArray =  MyArray.join()
// console.log(MyArray)
// console.log(newArray)
// console.log(typeof newArray)

//  slice , spalice

console.log("A",MyArray)
let myn1 = MyArray.slice(1,3)
console.log(myn1)

console.log("B",MyArray)
let myn2 = MyArray.splice(1,3)
console.log(myn2)

console.log("c",MyArray)

