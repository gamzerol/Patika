import { createContext, useState, useEffect } from "react";
import data from '../data/data';
import axios from "axios";

let weeksDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [activeCity, setActiveCity] = useState(data[0]);
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await axios(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${activeCity.latitude}&lon=${activeCity.longitude}&appid=6c8dba8d330e292e29471275b19522d8`
      )
        .then((response) => {
          let data = response.data;
          setWeather(data.list.slice(0,7));
        })
        .catch((error) => console.log(error));
    };
    getData()
  }, [activeCity]);

  const values = { weather, activeCity, setActiveCity, weeksDay };
  
  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export default WeatherContext;
