
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState('');
    let [error, setError] = useState('');

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "6605024609ba4dc40caa3ef1a55042f4";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            if (!response.ok) {
                throw new Error('Failed to fetch weather data');
            }
            let jsonResponse = await response.json();
          
            let result = {
                city:city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;

        } catch (error) {
            console.error('Error fetching weather data:', error.message);
        }
    };

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async (evt) => {
        evt.preventDefault();
        console.log(city);
        setCity("");
      let newInfo = await  getWeatherInfo();
      updateInfo(newInfo);
    };

    return (
        <div className="SearchBox">
            
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange} // Added onChange handler
                />
                <br/><br/>
                <Button variant="contained" type="submit">
                    Search
                </Button>
            </form>
        </div>
    );
};
