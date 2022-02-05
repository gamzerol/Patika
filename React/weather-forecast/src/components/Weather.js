import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";

const Weather = () => {
  const { weather, weeksDay } = useContext(WeatherContext);

  return (
    <div className="weathers">
      {weather.map((info) => {
        return (
          <div className="weather" key={info.dt}>
            <span className="day">{info.weather[0].main}</span>
            <div className="icon">
              <img
                src={require(`../Icons/${info.weather[0].icon}.svg`)}
                alt={info.weather[0].main}
              />
            </div>
            <span className="temp">{`${Math.round(info.main.temp_min)}°C ${Math.round(info.main.temp_max)}°C`}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Weather;
