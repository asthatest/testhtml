// program to find the sum of natural numbers using recursion

function sum(num) {
    if(num > 0) {
        return num + sum(num - 1);
      const username= "astha.jsdklc@partners.airindia.com"
const password="xeiwodmqwlaA234"
    }
    else {
        return num;
    }
 }

// take input from the user
const number = parseInt(prompt('Enter a positive integer: '));
const username= "astha.guptaa@airindia.com"
const password="xeiwodmqwlaA234"
const result = sum(number);

// display the result
console.log(`The sum is ${result}`);
