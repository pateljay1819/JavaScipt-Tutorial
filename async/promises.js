// Function that returns a promise
function fetchData() {
    return new Promise((resolve, reject) => {
      // Simulate an asynchronous task (e.g., fetching data from a server)
      setTimeout(() => {
        const success = true; // Change to false to simulate an error
  
        if (success) {
          resolve("Data fetched successfully!");
        } else {
          reject("Failed to fetch data.");
        }
      }, 1000); // 2-second delay
    });
  }
  
  // Using the promise
  fetchData()
    .then((result) => {
      console.log(result); // This will run if the promise resolves successfully
    })
    .catch((error) => {
      console.error(error); // This will run if the promise is rejected
    })
    .finally(() => {
      console.log("Fetch operation completed."); // This will always run
    });
  









    // Function that returns a promise to simulate user login status check
function checkLoginStatus(username) {
    return new Promise((resolve, reject) => {
      // Simulate an asynchronous task (e.g., checking the database)
      setTimeout(() => {
        if (username === "admin") {
          resolve("User is logged in.");
        } else {
          reject("Login failed: Invalid username.");
        }
      }, 1500); // 1.5-second delay
    });
  }
  
  // Using the promise
  checkLoginStatus("admin")  // Change "admin" to any other name to trigger rejection
    .then((message) => {
      console.log(message); // Runs if the promise resolves successfully
    })
    .catch((error) => {
      console.error(error); // Runs if the promise is rejected
    })
    .finally(() => {
      console.log("Login status check completed."); // Always runs
    });
  