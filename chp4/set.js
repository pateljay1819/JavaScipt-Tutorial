const mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(5); 

console.log(mySet); 

//duplicate values are not assigned

const mySet1 = new Set([1, 2, 3, 4, 4, 5]); // 4 is a duplicate 

console.log(mySet1); 


//to check values from set
const mySet2 = new Set([1, 2, 3]);

console.log(mySet2.has(1)); 
console.log(mySet2.has(4)); 

const mySet3 = new Set([1, 2, 3]);//removing a value from set

mySet3.delete(2);

console.log(mySet3); // Output: Set { 1, 3 }/


const mySet4 = new Set([1, 2, 3]);

mySet4.forEach(value => {
  console.log(value);
});

// converting in array form
const mySet5= new Set([4, 5, 6]);

const myArray = Array.from(mySet5);

console.log(myArray);

mySet5.clear();

console.log(mySet5);



