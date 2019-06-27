import { getCity, getCityConditions } from "./forecast";
import { updateUIDetails, updateUIIcon, updateUIImg } from "./UIupdates";

const daySVG = require("../dist/img/day.svg");
const nightSVG = require("../dist/img/night.svg");

const cityForm = document.querySelector("form");
const card = document.querySelector(".card");

const updateUI = ({
  cityDetails: { EnglishName },
  cityWeather: { Temperature, WeatherText, IsDayTime, WeatherIcon }
}) => {
  const timeSrc = IsDayTime ? daySVG : nightSVG;
  const tempInCelsius = Temperature.Metric.Value;
  const iconsSrc = `../img/icons/${WeatherIcon}.svg`;

  updateUIDetails(EnglishName, tempInCelsius, WeatherText);
  updateUIImg(timeSrc);
  updateUIIcon(iconsSrc);

  card.classList.remove("d-none");
};

const updateCity = async city => {
  const cityDetails = await getCity(city);
  const cityWeather = await getCityConditions(cityDetails.Key);

  return {
    cityDetails,
    cityWeather
  };
};

cityForm.addEventListener("submit", e => {
  e.preventDefault();

  const city = cityForm.city.value.trim();
  updateCity(city)
    .then(data => {
      updateUI(data);
    })
    .catch(err => console.log(err));

  cityForm.reset();
});
