let score = 45;
let grade;
let comment;

if (score >= 90 && score <= 100) {
    grade = "A"
   comment = "congratulation,you have passed the exam with dist";
} else if(score >=70 && score <= 89){
    grade = "B"
    comment = "congratulation,you have passed the exam with first class";
} else if(score >= 60 && score <=69){
    grade = "C"
    comment = "congratulation,you have passed the exam with second class";
} else if(score >=50 && score <=59) {
    grade = "D"
    comment = "congratulation,you have passed the exam";
} else if(score >= 0 && score <=49){
    grade = "F"
    comment = "sorry,you have not cleared exam";
}

console.log("according to your score,your grade was: ", grade)
console.log(comment);