// Function to print messages
function myfunction() {
    console.log("Welcome to Chapter 5 Function");
    console.log("We are learning JS now");
}

// Call the function twice
myfunction();
myfunction();

// Define the sum function
function sum(a, b) {
    return a + b;
}


let val = sum(3, 4);
console.log(val); 




function findLargest(arr) {
    return Math.max(...arr);
}
console.log(findLargest([2, 5, 7, 1, 9]));



function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15

// Function to find the maximum of three numbers
function maxOfThree(a, b, c) {
    return Math.max(a, b, c);
}

console.log(maxOfThree(10, 20, 15));

// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString('hello')); 
