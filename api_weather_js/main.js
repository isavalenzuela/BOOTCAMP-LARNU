const API_CITY_URL = "https://api.api-ninjas.com/v1/city?name=";

const API_WEATHER_URL = "https://api.api-ninjas.com/v1/weather?city=";

const API_NINJA_KEY = "";

//normaliza input utilizando API de Ciudades
function getCityByUserInput(userInput) {
  const headers = {
    "X-Api-Key": API_NINJA_KEY,
  };
  return axios
    .get(`${API_CITY_URL}${userInput}`, { headers })
    .then((response) => response.data);
}

//obtiene weather en base al input normalizado
function getWeatherByCity(city) {
  const headers = {
    "X-Api-Key": API_NINJA_KEY,
  };
  return axios
    .get(`${API_WEATHER_URL}${city}`, { headers })
    .then((response) => response.data);
}

/* window.onload = async function () {
  const cityResponse = await getCityByUserInput("Conce");
  console.log(cityResponse[0].name);
  getWeatherByCity(cityResponse[0].name);
}; */

async function searchCityByInput() {
  const userInput = document.getElementById("city-input").value;
  const cityResponse = await getCityByUserInput(userInput);

  const weatherResponse = await getWeatherByCity(cityResponse[0].name);

  sessionStorage.setItem("weatherResponse", JSON.stringify(weatherResponse));
  sessionStorage.setItem("cityName", cityResponse[0].name);
  window.location.href = "success_view.html";
}

function getWeatherFromStorage() {
  const weatherResponse = JSON.parse(sessionStorage.getItem("weatherResponse"));
  const cityName = sessionStorage.getItem("cityName");
  showWeatherData(weatherResponse, cityName);
  console.log(cityName);
  console.log(weatherResponse);
}

//esta función muestra los datos obtenidos en pantalla
function showWeatherData(weatherDataInput, cityName) {
  const citySpan = document.getElementById("city");
  citySpan.innerText = cityName;

  const tempSpan = document.getElementById("temp");
  tempSpan.innerText = weatherDataInput.temp;

  const windSpan = document.getElementById("wind");
  windSpan.innerText = weatherDataInput.wind_speed;
}
