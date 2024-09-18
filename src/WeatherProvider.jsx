import React, { createContext, useState } from 'react'


export const WeatherContext = createContext()
export default function WeatherProvider({children}) {
    const [open, setOpen] = useState(0);
    const [error, setError] = useState("");
    console.log(open)
  const [currentWeather, setCurrentWeather] = useState({});
  const [weatherData,setWeatherData]=useState([])
  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        setWeatherData,
        open,
        setOpen,
        currentWeather,
        setCurrentWeather,
        error,
        setError,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}
