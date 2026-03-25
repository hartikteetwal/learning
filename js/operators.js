// methmatical operators
var a = 10
var b = 20

var c = a + b
console.log(`${a}+${b}=${c}`)
c = a-b
console.log(`${a}-${b}=${c}`)
c = a*b
console.log(`${a}*${b}=${c}`)
c = a/b
console.log(`${a}/${b}=${c}`)
c = a%b
console.log(`${a}%${b}=${c}`)
c = a**2
console.log("exponential operator",c)
c = a++
console.log("increment Operator", c)
c = --b
console.log("decrement Operator", c)



// assignment operator =
a = 30
console.log(a)


// comparision operator 
var a = 20
var b = "20"
console.log("greator then",a>b)
console.log("less then",a<b)
console.log("greator then equal to",a>=b)
console.log("less then equal to", a <= b)

console.log("double equal to",a==b)
console.log("triple equal to", a === b)

console.log("not equal to", a !== b)
a+=5                                           //a = a+5
console.log("increment assign",a)
a-=5                                           //a = a-5
console.log("decrement assign",a)


// logical operator && || !
console.log(true&&true)
console.log(true || false)
console.log(!true)








// nature of any value - truthy or falsy
console.log(!!"harsh")    // 1-infinite and all string

console.log("nature 0",!!0)
console.log("nature null",!!null)
console.log("nature undefined",!!undefined)
console.log("nature []",!![])
console.log("nature {}", !!{})
console.log("nature NaN", !!NaN)




console.log(isNaN(39))

console.log("harsh" / 2)

// +   add, concatination
console.log("22" - "40")

console.log(23+2)
console.log("23"-2)
