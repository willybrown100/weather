import React, { useContext, useState } from 'react'

import Form from './Form';
import Weather from './Weather';
import { WeatherContext } from '../WeatherProvider';
import CurrentWeather from './CurrentWeather';
import TemperatureChart from './TemperatureChart';
import LoadingSpinner from './LoadingSpinner';
import Avatar from './Avatar';

export default function AppLayout() {
    const [loading, setLoading] = useState(false);
  const [cityName, setCityName] = useState("");
   const { weatherData, setWeatherData } = useContext(WeatherContext);
  return (
    <div className="min-h-screen p-2 md:grid  md:place-items-center">
      <div className="md:grid md:grid-cols-[13rem,30rem] items-center lg:grid-cols-[13.5rem,35.6rem] md:bg-white  md:rounded-lg md:shadow-md lg:w-[830px] overflow-hidden md:gap-x-3 md:p-3 lg:p-6">
        <div className="bg-white rounded-[2rem] md:rounded-none p-2">
          <div className="justify-end flex md:hidden mb-5  p-3">
            <Avatar />
          </div>
          <Form setLoading={setLoading} cityName={setCityName} />
          {loading && <LoadingSpinner/>}
          <div>
            <CurrentWeather />
          </div>
        </div>

        <div>
          <div className='md:flex hidden  justify-end mb-5'>
          <Avatar />
          </div>
          <TemperatureChart />
          {weatherData.weathercode && <Weather />}
        </div>
      </div>
    </div>
  );
}
