// let Obj = new Object() // singletone

let InstaUser = {}    // non-singleton
// console.log(Obj)
// console.log(Obj1)

InstaUser.Id = 100
InstaUser.name = "utsav"
InstaUser.loggedIn = false

// console.log(InstaUser)

const regularUser = {
    email : "utsav@gmail.com ",
    fullName:{
        userFullname : {
            firstname : "utsav",
            lastName :  "katakiya"
        }
    }

}

// console.log(regularUser.fullName.userFullname.firstname)

let Obj1 = {1 : "a" , 2: " b"}
let obj2 = {3  : "a" , 4: "b"}

// let obj3 = { Obj1 ,obj2}  //{ Obj1: { '1': 'a', '2': ' b' }, obj2: { '3': 'a', '4': 'b' } }

//let obj3 = Object.assign(  {}, Obj1 , obj2) // { '1': 'a', '2': ' b', '3': 'a', '4': 'b' }

//  let  obj3 = {...Obj1 , ...obj2} spread
// console.log(obj3)

console.log(InstaUser);
// console.log(Object.keys(InstaUser))    [ 'Id', 'name', 'loggedIn' ]

// console.log(Object.values(InstaUser));  [ 100, 'utsav', false ]
 
// console.log(Object.entries(InstaUser));  [ [ 'Id', 100 ], [ 'name', 'utsav' ], [ 'loggedIn', false ] ]

// console.log(InstaUser.hasOwnProperty('Id'));


let course = {
    courseName : "js",
    price : 999,
    courseInstructor : "utsav"


}


let {courseInstructor} = course
console.log(courseInstructor);


let {courseInstructor : Instructor} = course
console.log(Instructor)  

