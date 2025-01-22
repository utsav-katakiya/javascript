function multiplyby5(num){
  return num*5
    
}
multiplyby5()
console.log(multiplyby5(5));

function createuser(username, price){
    this.username = username
    this.price = price
}
createuser.prototype.increment = function(){
    this.price++
}
createuser.prototype.printme = function(){
    console.log(`this is price of ${this.price}`);
    
}
const chai = new createuser("chai",10)
const tea = new createuser("tea",20)

chai.printme()
tea.printme()