import React, { useContext } from 'react'
import { WeatherContext } from '../WeatherProvider';
// import { Area, AreaChart, CartesianGrid } from 'recharts';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function TemperatureChart() {
  const { weatherData, setWeatherData, currentWeather, setCurrentWeather } =
    useContext(WeatherContext);

  

  

  const weatherDatas = {
    temperature_2m_max: weatherData?.temperature_2m_max?.map((item) => item),
    time: weatherData?.time?.map((item) => item),
  };

  // Combine time and temperature into an array of objects
  const data = weatherDatas?.temperature_2m_max?.map((temp, index) => ({
    date: weatherDatas.time[index],
    maxtemp: temp,
  }));

 
  return (
    <ResponsiveContainer width="100%" height={200} className="my-3">
      <AreaChart data={data} width={200} height={200}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        {/* <YAxis /> */}
        <Tooltip />
        <Area
          type="monotone"
          dataKey="maxtemp"
          stroke="#2176ff"
          fill=" #7aadff"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}



// Combine time and temperature into an array of objects




