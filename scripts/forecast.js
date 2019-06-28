require("dotenv").config();

const { API_KEY } = process.env;

export const getCityConditions = async cityKey => {
  const url = `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${API_KEY}`;

  const res = await fetch(url);
  const data = await res.json();
  return data[0];
};

export const getCity = async city => {
  const url = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${city}`;

  const res = await fetch(url);
  const data = await res.json();
  return data[0];
};
