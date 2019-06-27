require("dotenv").config();

const { API_KEY } = process.env;

export const getCityConditions = async cityKey => {
  const res = await fetch(
    `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${API_KEY}`
  );
  const data = await res.json();
  return data[0];
};

export const getCity = async city => {
  const base = `http://dataservice.accuweather.com/locations/v1/cities/search`;
  const query = `?apikey=${API_KEY}&q=${city}`;

  const res = await fetch(`${base}${query}`);
  const data = await res.json();
  return data[0];
};
