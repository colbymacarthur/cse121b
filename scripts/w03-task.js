/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    return number1 + number2;
}
function addNumbers(){
    let addNumber1 = Number(document.getElementById('add1').value);
    let addNumber2 = Number(document.getElementById('add2').value);
    document.getElementById('sum').value = add(addNumber1, addNumber2);
}
document.getElementById('addNumbers').addEventListener('click', addNumbers); 

/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2){
    return number1 - number2;
}
function subtractNumbers(){
    let subtractNumber1 = Number(document.getElementById('subtract1').value);
    let subtractNumber2 = Number(document.getElementById('subtract2').value);
    document.getElementById('difference').value = subtract(subtractNumber1, subtractNumber2);
}
document.getElementById('subtractNumbers').addEventListener('click', subtractNumbers); 

/* Arrow Function - Multiply Numbers */
const multiply = (factor1, factor2) => factor1 * factor2;

function multiplyNumbers(){
    let multiplyNumber1 = Number(document.getElementById('factor1').value);
    let multiplyNumber2 = Number(document.getElementById('factor2').value);
    document.getElementById('product').value = multiply(multiplyNumber1, multiplyNumber2);
}
document.getElementById('multiplyNumbers').addEventListener('click', multiplyNumbers); 

/* Open Function Use - Divide Numbers */
function divide(number1, number2){
    return number1 / number2;
}
function divideNumbers(){
    let dividend = Number(document.getElementById('dividend').value);
    let divisor = Number(document.getElementById('divisor').value);
    document.getElementById('quotient').value = divide(dividend, divisor);
}
document.getElementById('divideNumbers').addEventListener('click', divideNumbers); 

/* Decision Structure */
function getTotal(){
    let subTotal = parseFloat(document.getElementById('subtotal').value);
    if (document.getElementById('member').checked){
        subTotal = subTotal * .8;
    }
    
    document.getElementById('total').textContent = `$${subTotal.toFixed(2)}`; 
}
document.getElementById('getTotal').addEventListener('click', getTotal);

/* ARRAY METHODS - Functional Programming */
let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

/* Output Source Array */
document.getElementById('array').innerHTML = numberArray

/* Output Odds Only Array */
const oddNumbers = numberArray.filter(number => number % 2 !== 0);
document.getElementById('odds').innerHTML = oddNumbers;

/* Output Evens Only Array */
const evenNumbers = numberArray.filter(number => number % 2 == 0);
document.getElementById('evens').innerHTML = evenNumbers;

/* Output Sum of Org. Array */
const sumNumbers = numberArray.reduce((total, currentValue) => total + currentValue, 0);
document.getElementById('sumOfArray').innerHTML = sumNumbers;

/* Output Multiplied by 2 Array */
const map2Numbers = numberArray.map(number => number *2);
document.getElementById('multiplied').innerHTML = map2Numbers;

/* Output Sum of Multiplied by 2 Array */
const summultipliedNumbers = map2Numbers.reduce((total, currentValue) => total + currentValue, 0);
document.getElementById('sumOfMultiplied').innerHTML = summultipliedNumbers;