import React, { useContext, useEffect, useState } from 'react'
import { WeatherContext } from '../WeatherProvider';
import WeatherItems from './WeatherItems';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'; // Core Swiper styles
 // Navigation module styles
import 'swiper/css/pagination'; // Pagination module styles
// Scrollbar module styles


import { Pagination, } from 'swiper/modules';

export default function Weather() {
       const { weatherData, setWeatherData } = useContext(WeatherContext);

       const {
         time,
         temperature_2m_max: maxTemp,
         temperature_2m_min: minTemp,
         relative_humidity_2m_max: humidity,
         weathercode,
         windspeed_10m_max:windSpeed,
       } = weatherData; 
       console.log(weatherData)
  return (
    <div className='mt-4 '>

      <ResponsiveSwiper time={time} windSpeed={windSpeed} maxTemp={maxTemp} minTemp={minTemp} humidity={humidity} weathercode={weathercode}/>
    </div>
  );
}

const ResponsiveSwiper = ({
  time,
  maxTemp,
  minTemp,
  windSpeed,
  humidity,
  weathercode,
}) => {

  
  const {
    weatherData,
    setWeatherData,
    currentWeather,
    open,
    setOpen,
    setCurrentWeather,
  } = useContext(WeatherContext);
console.log(open)
  const handleClick = function (item, i) {
    setCurrentWeather(item);
    setOpen(i);
  };

  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      breakpoints={{
        320: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        // When window width is >= 640px (e.g., tablets)
        640: {
          slidesPerView: 6,
          spaceBetween: 20,
        },
        // When window width is >= 768px (e.g., medium-sized devices)
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        // When window width is >= 1024px (e.g., desktops)
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      }}
    >
      {time?.map((date, i) => (
        <SwiperSlide>
          <WeatherItems
            date={date}
            maxTemp={maxTemp.at(i)}
            weathercode={weathercode.at(i)}
            minTemp={minTemp.at(i)}
            windSpeed={windSpeed.at(i)}
            humidity={humidity.at(i)}
            key={date}
            bg={i === open ? "bg-[#535bf2] text-white " : "bg-white"}
            text={i === open ? " text-white " : ""}
            today={i == 0}
            onClick={() =>
              handleClick(
                {
                  date,
                  maxTemp: maxTemp.at(i),
                  minTemp: minTemp.at(i),
                  humidity: humidity.at(i),
                  weathercode: weathercode.at(i),
                  windSpeed: windSpeed.at(i),
                },
                i
              )
            }
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};


