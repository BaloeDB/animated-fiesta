import { useState } from "react";

function WeatherApp() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async () => {
    const url = `http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${city}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button onClick={handleSearch}>Search</button>
      {weatherData && (
        <div>
          <h2>{weatherData.location.name}</h2>
          <p>{weatherData.current.temp_c}°C</p>
          <p>{weatherData.current.condition.text}</p>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;
