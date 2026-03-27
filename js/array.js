// array 
var arr = [1,2,3,4,5,6,7]

console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])

arr.push("hartik")
arr.pop()

let sclicc = arr.slice(0,4)
console.log("slice", sclicc)


arr.splice(3,1,25)    // (index, (0 ->add, 1-> update,2->delete),number)

console.log(arr)

let lengthOfArray = arr.length
console.log("length", lengthOfArray)



// object 
var obj = { "name": "harsh", "role": 23, "course": "BCA","mobile brand":"one plus" }

console.log(obj)

console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(obj.name)
console.log(obj.role)
console.log(obj["mobile brand"])

let lengthOfObject = Object.keys(obj).length
console.log("length", lengthOfObject)


