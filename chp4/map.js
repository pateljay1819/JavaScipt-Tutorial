const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

console.log(fruits.has("apples")); 
console.log(fruits.has("grapes")); 

const values = fruits.values();
console.log("All keys and values:");
for (let [key, value] of fruits) {
  console.log(`Name: ${key}, Value: ${value}`);
}



const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(function(num) {
  return num * 2;
});

console.log(doubled); // Output: [2, 4, 6, 8, 10]


//Mapping an Array of Objects
//const users = [
    //{ name: "Jay", age: 25 },
    //{ name: "d4", age: 30 },
    //{ name: "butesh", age: 35 }
  //];
  
  //const names = users.map(user => user.name);
  
  //console.log(names); 
  
  const users = [
    { firstName: "Jay", lastName: "Patel" },
    { firstName: "D4", lastName: "Bro" },
    { firstName: "Butesh", lastName: "Patel" }
  ];
  
  const fullNames = users.map(user => {
    return {
      fullName: `${user.firstName} ${user.lastName}`
    };
  });
  
  console.log(fullNames);
  