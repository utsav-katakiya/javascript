// let myname = "utsav         "

// console.log(myname.trim().length);

String.prototype.truelength = function(){
    console.log(this.trim().length);
    
}
"mukesh".truelength()
"bapu".truelength()
let mycars = {
    maruti : "10lakh",
    toyota : "25lakh",
    merc : "1cr",
     
    total : function(){
        console.log("1.25cr");
        
    }
}

Object.prototype.carsname = function(){
    console.log("maruti , merc,toyota");
    
}
mycars.carsname()