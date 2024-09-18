import React, { useContext, useEffect, useState } from 'react'
import { convertToFlag } from "../utils/utils";
import { WeatherContext } from '../WeatherProvider';
export default function Form({setLoading}) {
   const { weatherData, setWeatherData,setError,error, setCurrentWeather } =
     useContext(WeatherContext);
  const [cityName,setCityName]=useState("")
  const [city,setCity]=useState("lagos")
  
   console.log(cityName)
    const weather = weatherData
      ? {
          date: weatherData.time?.[0] || "", // Ensure data exists, fallback to 'N/A' if undefined
          maxTemp: weatherData.temperature_2m_max?.[0] || "",
          minTemp: weatherData.temperature_2m_min?.[0] || "",
          humidity: weatherData.relative_humidity_2m_max?.[0] || "N/A",
          weathercode: weatherData.weathercode?.[0] || "N/A",
          windSpeed: weatherData.windspeed_10m_max?.[0]||""
        }
      : {};
 

    useEffect(() => {
      if (weatherData) {
        setCurrentWeather(weather);
      }
    }, [weatherData]);
  useEffect(() => {
    async function getWeather(location) {
      try {
        // 1) Getting location (geocoding)
        setLoading(true);
        const geoRes = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${location}`
        );
        const geoData = await geoRes.json();
        console.log(geoData);

        if (!geoData.results) throw new Error("Location not found");

        const { latitude, longitude, timezone, name, country_code } =
          geoData.results.at(0);
        setCityName(`${name} ${convertToFlag(country_code)}`);

        // 2) Getting actual weather
        const weatherRes = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode,windspeed_10m_max,relative_humidity_2m_max,temperature_2m_min,temperature_2m_max&timezone=${timezone}`
        );
        const weatherData = await weatherRes.json();
        console.log(weatherData.daily);
        setWeatherData(weatherData.daily);
      } catch (err) {
        console.log(err);
       
        setError(err.message);
      } finally {
        setLoading(false);
   
      }
    }
    getWeather(city);
  }, [city, setError]);

  return (
    <form className="grid place-items-center">
      <input
        type="text"
        value={city}
        onChange={(e)=>setCity(e.target.value)}
        placeholder="search your city here "
        className="bg-transparent outline-none rounded-lg capitalize text-stone-500 text-center border-b border-b-stone-400 placeholder:capitalize"
      />

<p className='capitalize mt-2 mb-2 font-semibold'>displaying for {cityName}</p>
    </form>
  );
}



