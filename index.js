// 1.ways to use print hello world


console.log("Hello World");

// 2. js console api
console.warn("This is warning");
console.error("This is error");

//3.variables-to store data
var a = 34;
var b = 26;
console.log(a + b);

// 4.Datatypes in java script
// numbers
var num1 = 45;
var num2 = 56.78;

// string
var str1 = "this is string"
var str2 = "this is also string"

console.log(str2[4]);

//objects
var marks = {
    jay: 99,
    butesh: 70,
    jayant : 81,
}

//boolens
var a = true;
var b = false;
 console.log(a,b);

 var und = undefined;
 console.log(und);
// null
 var n = null;
 console.log(n);

//arr
var arr = [1, 2, "queen", 4, 5]
console.log(arr)


var a = 100;
var b = 10;
console.log("The value of a + b is ", a+b);
console.log("The value of a - b is ", a-b);
console.log("The value of a * b is ", a*b);
console.log("The value of a / b is ", a/b);



var c = b;
c += 2;
console.log(c);

var x = 34;
var y = 56;
console.log(x == y);
console.log(x >= y);
console.log(x <= y);
console.log(x > y);
console.log(x < y);


function avg(a, b) {
    c = (a + b) / 2;
    return c;
}

c1 = avg(4, 6);
c2 = avg(14, 16);
console.log(c1, c2);


let myDate = new Date();
console.log(myDate.getDate());
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDay());
console.log(myDate.getMinutes());
console.log(myDate.getHours());

 

let elem = document.getElementById('click');
console.log(elem);
