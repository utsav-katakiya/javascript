class user{
    constructor(user){
        this.user = user
    }
    logMe(){
        console.log(`username is ${this.user}`);
        
    }
}

class teacher extends user {
    constructor(user,email,password){
    super(user)
    this.email=email
    this.password = password

    
}
    addcourse(){
    console.log(`a new course added by ${this.user}`);
    
    }

}
const chai = new teacher("chai"," chai@gmail.com0","123")
chai.addcourse()