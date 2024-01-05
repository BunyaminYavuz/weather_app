import React, { useEffect, useState } from 'react';
import { useCity } from '../context/City';
import ClearIcon from "../assets/clear.png";
import CloudIcon from "../assets/cloud.png";
import DrizzleIcon from "../assets/drizzle.png";
import RainIcon from "../assets/rain.png";
import SnowIcon from "../assets/snow.png";
import OvercastIcon from "../assets/overcast.png";
import Dropdown from './Dropdown';
import "../App.css"

function Weather() {
  const [weather, setWeather] = useState({});
  const { city } = useCity();

  useEffect(() => {
    const fetchData = async () => {
      if (city) {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/next7days?unitGroup=metric&include=days&key=A7DJ2VZ86L5JYYLXU3KCFP97J&contentType=json`);
        const data = await response.json();
        setWeather(data);
      }
    };

    fetchData();
  }, [city]);

  // console.log(weather);

  return (
    <div>
      <h1>WEATHER APP</h1>

      <Dropdown />

      {
        weather && weather.address &&
        <div>{weather.address.toUpperCase()}</div>
      }

      {
        weather.days && (
          <div className="row">
            {weather.days.map((w, index) => (
              <div className='card' key={index}>
                <div>{w.datetime}</div>
                {w.conditions.includes('Clear') && <img src={ClearIcon} alt="" width={100} height={100} />}
                {w.conditions.includes('cloudy') && <img src={CloudIcon} alt="" width={100} height={100} />}
                {w.conditions.includes('Drizzle') && <img src={DrizzleIcon} alt="" width={100} height={100} />}
                {w.conditions.includes('Rain') && <img src={RainIcon} alt="" width={100} height={100} />}
                {w.conditions.includes('Snow') && <img src={SnowIcon} alt="" width={100} height={100} />}
                {w.conditions.includes('Overcast') && <img src={OvercastIcon} alt="" width={100} height={100} />}
                {/* <div>{w.conditions}{"****"}</div> */}
                <div>{`Max: ${w.tempmax}°C`}</div>
                <div>{`Min: ${w.tempmin}°C`}</div>
              </div>
            ))}
          </div>
        )}

      <footer className="site-footer">
        <p>&copy; Bunyamin YAVUZ <a href="https://github.com/BunyaminYavuz" target="_blank" rel="noreferrer">Github</a></p>
      </footer>

    </div>
  );
}

export default Weather;
