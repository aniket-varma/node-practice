
var rect=require('./rectangle.js')

function solve(l,b){
    rect(l,b, (err, rectangle) =>{
        if(err){
            console.log("Error: "+err.message)
        }
        else{
            console.log("Area: "+rectangle.area()+" Perimeter: "+rectangle.perimeter())
        }
    })
}
solve(3,5)
solve(-3,2)
solve(21,29)