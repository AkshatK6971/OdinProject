async function getWeather(location){
    const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + location + "?key=8GDFQWBV6E5XMW8DHP9472RCR");
    const data = await response.json();
    console.log(data);
    let resolvedAddr = data.resolvedAddress;
    let description = data.days[0].conditions;
    let temp = Math.floor(data.days[0].temp);
    let humidity = data.days[0].humidity;
    let windspeed = data.days[0].windspeed;
    let dew = data.days[0].dew;
    return {resolvedAddr, description, dew, temp, humidity, windspeed};
}

async function handleClick(){
    event.preventDefault();
    let input = document.querySelector("input");
    let location = input.value;
    if(location == null)
        return;

    let weather_data = await getWeather(location);
    displayData(weather_data);
}

function displayData(weather_data){
    let condition = document.querySelector(".condition");
    condition.textContent = weather_data.description;
    let location_place = document.querySelector(".location");
    location_place.textContent = weather_data.resolvedAddr;
    let degrees = document.querySelector(".degrees");
    degrees.textContent = weather_data.temp + "°F";
    let wind = document.querySelector(".wind-mph");
    wind.textContent = "WIND: " + weather_data.windspeed + " MPH";
    let dew = document.querySelector(".dew");
    dew.textContent = "DEW POINT: " + weather_data.dew + "°F";
    let humidity = document.querySelector(".humidity");
    humidity.textContent = "HUMIDITY: " + weather_data.humidity + "%";
}

async function onLoad(){
    let location = "nagpur";
    let weather_data = await getWeather(location);
    displayData(weather_data);
}

let btn = document.querySelector("button");
btn.addEventListener("click", handleClick);
onLoad();

