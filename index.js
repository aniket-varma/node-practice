var rect = {
    perimeter: (l,b) => (2*(l+b)),
    area: (l,b) => (l*b)
}

function solve(l,b){
    if(l<=0 || b<=0)    console.log("Invalid Dimesnions")
    else{
        console.log("Perimter: "+rect.perimeter(l,b)+" Area: "+rect.area(l,b))
    }
}

solve(3,5)
solve(-7,2)
solve(21,42)