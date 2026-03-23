// scope - the area of program where we access the variable
// let and const are block lavel varible
{
    let a = 30
    console.log(a)
}

{
    const c = 50
    console.log(c)
}


// ver is a globla level varible
{
    var v = 509
}
console.log(v)



// hoisting - variable diclearation moved on top of their scope is called hoisting

// var 

console.log("before var",ram)
var ram;
ram = 77
console.log("after var",ram)




// let 

// console.log("before let", as)      // initialize error
let as;
as   = 33
console.log("after let", as)




// const

// console.log("before const",con)          // initialize error
const con = 345;
console.log("after const",con)