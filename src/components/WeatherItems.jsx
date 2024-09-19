import React, { useContext, useEffect } from 'react'
import { formatDay, getWeatherIcon, getWeatherIcons } from '../utils/utils';
import { WeatherContext } from '../WeatherProvider';

export default function WeatherItems({onClick, maxTemp, minTemp,bg,text, humidity,today, index, weathercode ,date}) {
const wethericon = getWeatherIcons(weathercode);


  return (
    <div onClick={onClick} className={`border cursor-pointer ${bg} flex flex-col items-center border-stone-100 rounded-md  capitalize text-black bg-opacity-[0.82] p-2 `}>
      <span>{today?"today":formatDay(date)}</span>
      <div>
        <span className='text-[3rem] text-center'>{wethericon.icon}</span>

<div className='flex flex-col items-center'>

        <p className={`${text} text-stone-500 mb-0 capitalize`}>humidity</p>
        <span className={`text-black font-medium ${text}`}>{humidity}%</span>
</div>
      </div>
    </div>
  );
}
