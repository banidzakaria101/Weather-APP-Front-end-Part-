const container = document.querySelector(".container");
const app = document.querySelector(".app");
const weatherdisplay = document.querySelector(".weather-display");
const weatherdetails = document.querySelector(".weather-details");
const searchBtn = document.querySelector(".search-box button");
const searchBox = document.querySelector(".search-box input");
const image = document.querySelector(".weather-display img");

const cities = ["Casablanca", "Rabat", "Marrakech", "Tanger"];

const apiKey = "a34c841c2a3f6be574402f26ab63cb76";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q={city}&appid=" + apiKey;

async function citySearch(city) {
  const response = await fetch(apiUrl.replace("{city}", city));
  const data = await response.json();

  document.querySelector(".city-name").innerHTML = data.name;
  document.querySelector(".description").innerHTML = data.weather[0].description;
  document.querySelector(".temperature").innerHTML = data.main.temp + "°C";
  document.querySelector(".info-humidity span").innerHTML = data.main.humidity + "%";
  document.querySelector(".info-wind span").innerHTML = data.wind.speed + "km/h";

  if(data.weather[0].main == "Clouds"){
    image.src = "images/clouds.png";
  }
  else if(data.weather[0].main == "Clear"){
    image.src = "images/clear.png";
  }
  else if(data.weather[0].main == "Rain"){
    image.src = "images/rain.png";
  }
  else if(data.weather[0].main == "Snow"){
    image.src = "images/snow.png";
  }
  else if(data.weather[0].main == "Haze"){
    image.src = "images/haze.png";
  }


}

searchBtn.addEventListener("click", () => {
  citySearch(searchBox.value);
});

cities.forEach(city => {
  const cityElement = document.querySelector(`.cities button:nth-child(${cities.indexOf(city) + 1})`);
  cityElement.addEventListener("click", () => {
    citySearch(city);
  });
});
