import { useState } from "react";
import "./Weather.css";

function WeatherApp() {
  // State for the city input and weather data
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  // This function is called when the search button is clicked
  const handleSearch = async () => {
    const apiKey = process.env.API_KEY;
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    // Make the API request and update the state with the returned data
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setWeatherData(data);
      })
      .catch((error) => console.error("Error:", error));
  };

  // The JSX for the weather app
  return (
    <div className="weather-app">
      <div className="search-bar">
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
      </div>
      {weatherData && (
        <div className="weather-data">
          <h2 className="city-name">
            {weatherData.location.name}, {weatherData.location.country}
          </h2>
          <img
            className="weather-icon"
            src={weatherData.current.condition.icon}
            alt="weather icon"
          />
          <p className="temperature">{weatherData.current.temp_c}°C</p>
          <p className="weather-description">
            {weatherData.current.condition.text}
          </p>
          <div className="weather-details">
            <p>
              Wind: {weatherData.current.wind_kph} kph direction{" "}
              {weatherData.current.wind_dir}
            </p>
            <p>Humidity: {weatherData.current.humidity}%</p>
            <p>Last updated: {weatherData.current.last_updated}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;
