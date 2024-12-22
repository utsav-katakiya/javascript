const firstName= "utsav"
const lastName = "katakiya"
console.log(firstName+ lastName)


const gamename =new String('katakiya')
console.log( gamename[0] )
console.log(gamename.__proto__)


console.log(gamename.length)
console.log(gamename.toLowerCase())
console.log(gamename.charAt(4))
console.log(gamename.indexOf('y'))

const newString = gamename.substring(0,4)
console.log(newString)

const otherString = gamename.slice(-7,6)
console.log(otherString)


const newStringOne = "    utsav      "
console.log(newStringOne)
console.log(newStringOne.trim())

const email = "abcd@gmail.com"
console.log(email.replace("abcd","utsav"))