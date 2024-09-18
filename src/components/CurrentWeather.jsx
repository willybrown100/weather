import React, { useContext } from 'react'
import { WeatherContext } from '../WeatherProvider';
import { formatDay, formatDays, getWeatherIcon, getWeatherIcons } from '../utils/utils';

export default function CurrentWeather() {
       const {
         weatherData,
         setWeatherData,
         currentWeather,
         error,
         
         setCurrentWeather,
       } = useContext(WeatherContext);

       const {
         maxTemp = "N/A",
         minTemp = "N/A",
         humidity = "",
         today = "N/A",
         weathercode = "N/A",
         windSpeed=0,
         date = "",
       } = currentWeather || {};
console.log(currentWeather,windSpeed)
const weatherIcon = getWeatherIcons(currentWeather?.weathercode);
console.log(weatherIcon) 
  return (
    <div>
      <div className='flex flex-col items-center'>
        <p className="text-center mb-0 mt-4 capitalize font-medium text-stone-500 ">
          {formatDays(date)}
        </p>
        <div className="flex gap-x-2 justify-center items-center">
          <p className="text-[5rem] mb-0">{weatherIcon?.icon}</p>
          <p className="text-2xl font-semibold">
            {currentWeather?.maxTemp}&deg;
          </p>
        </div>
        <p className='text-center font-semibold capitalize text-2xl'>{weatherIcon?.description}</p>
        <div className='flex gap-x-9'>

        <div className='flex items-center flex-col gap-y-1'>
          <span className='capitalize text-stone-500 '>humidity</span>
          <span className='font-semibold capitalize'>{humidity}%</span>
        </div>
        <div className='flex items-center flex-col gap-y-1'>
          <span className='capitalize text-stone-500 '>wind speed</span>
          <span className='font-semibold capitalize'>{windSpeed}km/j</span>
        </div>
        </div>
      </div>
    </div>
  );
}
