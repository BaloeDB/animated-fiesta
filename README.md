# Weather App

This is a simple weather app built with React. It uses the WeatherAPI to fetch and display current weather data for any city.

## Setup

1. Clone this repository
2. Install dependencies with `npm install`
3. Create a `.env` file in the root of your project and add your WeatherAPI key like so: `API_KEY=your_api_key_here`
4. Start the app with `npm start`

## Features

- Search for a city to get current weather data
- Displays city name, temperature, weather description, wind data, humidity, and last updated time
- Shows forecast for the next three days
- Displays weather alerts
- Allows users to add cities to favorites and quickly view the weather in those areas
- Uses environment variables to securely store API key
- Use Geolocation API to get the user's current location and display their local weather by default

## User Interface

The user interface consists of a search bar where users can enter the name of a city, and sections to display the current weather data, forecast data, and weather alerts. Users can also add cities to their favorites, which are displayed as tabs at the top of the app.

## Components

The main component of the app is WeatherApp. This component maintains the state for the city input, weather data, forecast data, weather alerts, favorites, and whether the modal is open. It also defines functions to fetch weather data, handle search, add to favorites, and use geolocation.

## Styles

The app uses CSS for styling. The CSS file includes styles for the main container, search bar, each section, headers for each section, forecast data container, each day’s forecast data, header for the forecast data, weather alerts modal, and favorite tabs.

## Future Enhancements

- Add more detailed weather information, such as the UV index, visibility, sunrise and sunset times, etc.
- Implement a dark mode
- Add accessibility features
- Add localization of units (fahrenheit vs celsius)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

<a href="https://www.gnu.org/licenses/gpl-3.0.html">GNU General Public License v3.0</a>
