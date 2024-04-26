import { useState } from "react";
import "./Weather.css"; // Import the CSS file

function WeatherApp() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async () => {
    const apiKey = process.env.API_KEY; // replace with your environment variable name
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="weather-app">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        Search
      </button>
      {weatherData && (
        <div className="weather-data">
          <h2 className="city-name">{weatherData.location.name}</h2>
          <p className="temperature">{weatherData.current.temp_c}°C</p>
          <p className="weather-description">
            {weatherData.current.condition.text}
          </p>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;
