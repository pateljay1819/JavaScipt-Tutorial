let marks =[98,50,68,89,82];

let sum = 0;
for (let val of marks){
    sum += val;
}

let avg = sum/marks.length;
console.log(`avg marks of the class = ${avg}`);


let student_name =["jay","uday","butesh","jayant","dhruv","dev"];
//for loop
//for(let i = 0; i<student_name.length; i++) {
  //  console.log(student_name[i]);
//}

//for of loop
//for(let name of student_name){
  //  console.log(student_name);
//}
console.log(student_name);
console.log(student_name.toString());






//let marvelheroes = ["thor","spiderman","ironman"]
//marvelheroes.unshift("antman"); //add to start

//let val = marvelheroes.shift(); //delted to start
//console.log("deleted" , val);
//console.log(marvelheroes);



//let dcheroes = ["superman","batman"];

//console.log(dcheroes);

//let heroes = marvelheroes.concat(dcheroes); // combine two arrays
//console.log(heroes);
//console.log(heroes.toString());



let SportBikes =["r15","ktm","kawasaki ninja","truimph","apache"]
console.log(SportBikes.slice(1,3));   //return a piece of array


let arr = [1,2,3,4,,5,6,7,8];
//arr.splice(2,2,101,102);

//add element
//arr.splice(2,0,101);

//delete element
//arr.splice(3,1);

//replace element
arr.splice(3, 1,101);