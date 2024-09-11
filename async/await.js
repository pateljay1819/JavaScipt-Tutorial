function getweather() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("sunny with a chance of rain");
  },3000);
});
}


async function displayweather() {
  console.log("Fetching weather information...");

  let weather = await getweather();

  console.log(`weather update: ${weather}`);
  
}
displayweather();