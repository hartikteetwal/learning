var number1 = Number(prompt("Enter First value?"))
var number2 = Number(prompt("Enter Second value?"))
var operartion = prompt("Enter Operation?")

if (operartion == "+") {
    console.log(`${number1}+${number2}=${number1 + number2}`)
} else if (operartion == "-") {
    console.log(`${number1}-${number2}=${number1 - number2}`)
} else if (operartion == "*") {
    console.log(`${number1}*${number2}=${number1 * number2}`)
} else if (operartion == "/") {
    console.log(`${number1}/${number2}=${number1 / number2}`)
} else {
    console.log("Wrong operation")
}

