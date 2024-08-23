import React, { useState } from 'react';
import './App.css';

function App() {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = '0f621a0ab0eb0ff839a321ce0b2ab1c3';

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=${API_KEY}`);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {weatherData ? (
        <div>
          <h2>Current Weather for {weatherData.name}</h2>
          <p>Temperature: {weatherData.main?.temp}°C</p>
          <p>Humidity: {weatherData.main?.humidity}%</p>
          <p>Wind Speed: {weatherData.wind?.speed} m/s</p>
          {weatherData.weather && (
            <p>Precipitation: {weatherData.weather[0]?.description}</p>
          )}
          {console.log(weatherData)} {/* Log weatherData for debugging */}
        </div>
      ) : (
        <p>No weather data available</p>
      )}
    </div>
  );


}

export default App;
