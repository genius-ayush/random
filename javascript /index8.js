
console.log("start") ; 

setTimeout(function cb(){
    console.log("Callback");
},5000)

console.log("End") ;


// millions of lines of code 

let startDate = new Date().getTime() ; 

let endDate = startDate; 

while(endDate < startDate + 10000){
    endDate = new Date.getTime() ; 
}

console.log("while expires") ;