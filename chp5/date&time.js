let now = new Date();
console.log(now.toDateString());
console.log(now.getMonth());
console.log(now.getFullYear());
console.log(Math.floor(Date.now()/1000));


//let d = new Date("2022-03-25");
//console.log(d);

let hours = now.getHours();
let minute = now.getMinutes();
let second = now.getSeconds();

console.log(`${hours}:${minute}:${second}`);



let d = new Date(2018, 11, 24, 10, 33, 30);
console.log(d);






function getWeekendsInMonth(year, month) {
    let weekends = [];
    
    // Loop through all days of the month
    let date = new Date(year, month - 1, 1); // Create a date starting from the first day of the month
    while (date.getMonth() === month - 1) {
        let dayOfWeek = date.getDay();
        
        // Check if the day is a Saturday (6) or Sunday (0)
        if (dayOfWeek === 6 || dayOfWeek === 0) {
            weekends.push(new Date(date)); // Push a copy of the current date to the array
        }

        date.setDate(date.getDate() + 1); // Move to the next day
    }

    return weekends;
}

// Usage example:
let year = 2024;
let month = 10; // September (1-based month number)
let weekends = getWeekendsInMonth(year, month);

console.log(`Weekends in ${year}-${month}:`);
weekends.forEach(weekend => {
    console.log(weekend.toDateString()); // Display the weekend dates in a readable format
});



