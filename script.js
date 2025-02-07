 const button =document.getElementById("search-b");
 const input = document.getElementById("city-input");
 const cityTemp = document.getElementById("t1");
 const cWeatherCond = document.getElementById("ty1");
 const currentHumidity = document.getElementById("currentHumidity");
 const currentDate = document.getElementById("currentDate");
 async function getData(cityName){
    const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=d2da9e6ec0c44130b9d135821250502&q=${cityName}&aqi=yes`
    );
    return await promise.json();
 }
 button.addEventListener("click", async () => {
   const value = input.value;
   const result = await getData(value);
   console.log(result);

   cityTemp.innerText = result.current.temp_c + "°C";  // Added "°C"
   cWeatherCond.innerText = result.current.condition.text;
   currentHumidity.innerText = "HUMIDITY : "+result.current.humidity + "%";  // Adding % for clarity
   currentDate.innerText = result.current.last_updated;
});
 

