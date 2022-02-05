import Weather from './components/Weather';
import CitySelector from './components/CitySelector';
import { WeatherProvider } from './context/WeatherContext';
import './App.css';


function App() {
  return (
    <div className="App">
      <WeatherProvider>
        <CitySelector />
        <Weather />
      </WeatherProvider>
    </div>
  );
}

export default App;
