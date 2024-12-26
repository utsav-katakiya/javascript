const coding = ["js", "python", "cpp","java"]

coding.forEach(function (val) {
    // console.log(val);
    
})

coding.forEach((val)=> { 
    //  console.log(val);
    
})

function printme(item,index,val) {
    console.log(item,index,val);
    
}
coding.forEach(printme)

