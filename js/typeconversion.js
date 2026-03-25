// string to number 
var a = 34
var c = String(a)
console.log(c, typeof (c))

var b = Number(c)
console.log(b, typeof (b))


// array to string 
var arr = [29, 3, 2, 2, 3, 2, 3]
var arr2 = JSON.stringify(arr)
console.log(arr2, typeof (arr2))
var arr3 = JSON.parse(arr2)
console.log(arr3, typeof (arr3))


// json to string
var obj = {
    name:"harsh",
    role:34
}
console.log( obj, typeof (obj))
var obj2 = JSON.stringify(obj)
console.log(obj2, typeof (obj2))
var obj3 = JSON.parse(obj2)
console.log(obj3, typeof (obj3))
