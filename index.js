function showTemperature(response) {
  console.log(response);
  let temperatureElement = document.querySelector("#temperature");
  let humidityElement = document.querySelector("#humid");
  let cityElement = document.querySelector("#city");
  let weathername = document.querySelector("#w-name");

  temperatureElement.innerHTML = response.data.main.temp;
  humidityElement.innerHTML = response.data.main.humidity;
  cityElement.innerHTML = response.data.name;
  weathername.innerHTML = response.data.weather[0].description;
}

function handleSearch(city) {
  let apiKey = "9bf82bde9b03a609004d523347bbac08";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  handleSearch(searchInput.value);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

let now = new Date();
let h2 = document.querySelector("h2");

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();

let days = [
  "sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
h2.innerHTML = day + " " + hours + ":" + minutes;

function showPosition(position) {
  let h4 = document.querySelector("h4");
  h4.innerHTML = `Your latitude is ${position.coords.latitude} and your longitude is ${position.coords.longitude}`;
}
function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let button = document.querySelector("button");
button.addEventListener("click", getCurrentPosition);
