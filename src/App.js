import { useState } from "react";
import WeatherCard from "./components/WeatherCard";
import "./index.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = "bf63ee1c6bb140499e3160837252911";

  const fetchWeather = async () => {
    if (!city.trim()) return;

    setLoading(true);
    setWeather(null);

    try {
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
      );

      if (!res.ok) {
        throw new Error("Invalid city");
      }

      const data = await res.json();
      setWeather(data);
    } catch (err) {
      alert("Failed to fetch weather data");
    }

    setLoading(false);
  };

  return (
    <div className="app">
      <h1>Weather Forecast App</h1>

      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={fetchWeather}>Search</button>

      {loading && <p className="loading">Loading data...</p>}

      <div className="weather-cards">
        {weather && (
          <>
            <WeatherCard title="Temperature" value={`${weather.current.temp_c} °C`} />
            <WeatherCard title="Humidity" value={`${weather.current.humidity}%`} />
            <WeatherCard title="Condition" value={weather.current.condition.text} />
            <WeatherCard title="Wind Speed" value={`${weather.current.wind_kph} km/h`} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
