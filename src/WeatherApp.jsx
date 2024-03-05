import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import {useState} from "react";

export default function WeatherApp(){
  const [weatherInfo, setWeatherInfo] = useState({
    
        city: "Varanasi",
        feelslike: 24.84,
        temp: 25.4,
        tempMin: 26.3,
        tempMax: 27.2,
        humidity:34,
        weather:"haze",
       
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  }



    return (
        <div style={{textAlign:"center"}}>
            <h2>Weather App by Prashant</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info ={weatherInfo} />
        </div>
    );
}