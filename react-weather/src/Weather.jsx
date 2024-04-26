import { useEffect, useState } from "react";
import "./Weather.css";

function WeatherApp() {
  // State for the city input and weather data
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  // Fetches weather data of the current day for a given location
  const fetchWeatherData = (location) => {
    const apiKey = process.env.API_KEY;
    const currentUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;
    fetch(currentUrl)
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
      .catch((error) => console.error("Error:", error));
  };

  // Fetches forecast data for upcoming three days for a given location
  const fetchForecastData = (location) => {
    const apiKey = process.env.API_KEY;
    const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=4`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setForecastData(data.forecast.forecastday.slice(1)))
      .catch((error) => console.error("Error:", error));
  };

  // This effect runs when the component mounts
  useEffect(() => {
    /* global navigator */
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      // Fetch weather data for the user's current location
      fetchWeatherData(`${lat},${lon}`);
      fetchForecastData(`${lat},${lon}`);
    });
  }, []);

  // This function is called when the search button is clicked
  const handleSearch = async () => {
    // Fetch weather data for the input city
    fetchWeatherData(city);
    fetchForecastData(city);
  };

  // The JSX for the weather app
  return (
    <div className="weather-app">
      <div className="search-bar">
        <h1>Search City</h1>
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
          <h1>
            {weatherData.location.name}, {weatherData.location.country}
          </h1>
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
      {forecastData && (
        <div className="forecast-data">
          <h1>Forecast</h1>
          {forecastData.map((day) => (
            <div key={day.date} className="forecast-day">
              <h3>{day.date}</h3>
              <img
                className="weather-icon"
                src={day.day.condition.icon}
                alt="weather icon"
              />
              <p className="temperature">{day.day.avgtemp_c}°C</p>
              <p className="weather-description">{day.day.condition.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default WeatherApp;
