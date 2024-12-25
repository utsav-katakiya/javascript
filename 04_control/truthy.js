// truthy   [], "0", "  ",{ } ,function (){}

// falsy false,0,-0,bigint 0n ,null ,undefined , NaN

let useremail = []
if(useremail.length === 0){
    console.log("array empty");
    
}

let empObj = {}

if (Object.keys(empObj).length===0) {
    console.log("object is empty");
    
}