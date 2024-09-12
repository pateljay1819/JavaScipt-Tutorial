//variables
var name = "jay";
let age ="22";
const country = "india";

//datatypes
let string = "hello,world"; //string
let number = 3909; //number
let boolean = true; //false;
let undefined;
let nulltype = null; //null

//operaters
// Arithmetic: +, -, *, /, %
// Assignment: =, +=, -=
// Comparison: ==, ===, !=, !==, >, <
// Logical: &&, ||, !

let x = 5;
let y = 4;
let result = x + y ; 
let isEqual = x === y;  // Comparison: false
let isTrue = (x > y) && (y < 10);  // Logical: true

console.log(result, isEqual, isTrue); 


//conditional statement

let score = 75;

if (score > 90) {
  console.log("A");
} else if (score > 75) {
  console.log("B");
} else {
  console.log("C");
}

//loops

for (let i = 0; i < 5; i++) {
    console.log("Count:", i);
  }


   //while loop
   {
    let i = 0;
  while (i < 7) {
    console.log("Iteration number: " + i);
    i++;
  }
    }

    //dowhile loop
{
    let i = 0;
    do {
      console.log("Iteration number: " + i);
      i++;
    } while (i < 10);
    
    }

// Function Declaration
function greet(name) {
    return "Hello, " + name;
  }
  
  // Function Call
  let message = greet("Jay");
  console.log(message);  // Output: Hello, Jay
  