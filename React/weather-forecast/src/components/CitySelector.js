import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";

import cities from '../data/data';

const CitySelector = () => {

  const { setActiveCity } = useContext(WeatherContext);

  const selectCity = (event) => {
    let filteredCity = cities.filter(item => item.id == event.target.value);
    setActiveCity(filteredCity[0]);
  }

  return (
    <div className="city-selector">
      <select name="CITIES" onChange={selectCity}>
        {cities.map(city => {
          return <option value={city.id} key={city.id}>{city.name}</option>
        })}
      </select>
    </div>
  )
}

export default CitySelector;