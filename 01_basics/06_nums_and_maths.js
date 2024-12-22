const number = 100
// console.log(number)

const oneNumber = new Number(200)
// console.log(oneNumber)


// console.log(oneNumber.toString())
// console.log(oneNumber.toString().length)
// console.log(oneNumber.toFixed(2))

const otherNumber = 1123.9453
// console.log(otherNumber.toPrecision(5))

const hundreds =1000000
// console.log(hundreds.toLocaleString('en-In'))


// --------------------------------------maths----------------------------------------------

// console.log(Math)
// console.log(Math.abs(-5)) //5
// console.log(Math.round(50.657)) //51
// console.log(Math.ceil(56.386)) //57
// console.log(Math.floor(56.879))
// console.log(Math.min(5,3,6,4,7,9))
// console.log(Math.max(5,3,6,4,7,9))

console.log(Math.random())
console.log((Math.random()*10)+1)


const max =20
const min = 10
console.log(Math.floor(Math.random() * (max-min+1)) +min)