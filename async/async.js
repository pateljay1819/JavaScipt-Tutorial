// Simulate a network request with a delay
//function simulateNetworkRequest() {
  //  return new Promise((resolve) => {
    //    setTimeout(() => resolve('Data fetched!'), 2000);
    //});
//}

// Async function to handle the network request
//async function fetchData() {
  //  try {
    //    const result = await simulateNetworkRequest();
      //  document.getElementById('result').textContent = result; 
    //} catch (error) {
      //  console.error('Error:', error);
    //}
//}

// Add event listener to the button
//document.getElementById('fetchDataButton').addEventListener('click', fetchData);


function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    console.clear(); 
    console.log(timeString);
}

// Update the clock every second (1000 milliseconds)
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();
