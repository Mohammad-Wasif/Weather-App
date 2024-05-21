import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from './WeatherCard';
import "./WeatherApp2.css";

const WeatherApp2 = () => {
    const [searchValue, setSearchValue] = useState("london");
    const [tempInfo, setTempInfo] = useState({});
    const getWeatherInfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}units=Metric&appid=613c52619fe2838a2c6b2ffefc243b50`;

            const res = await axios.get(url);
            const data = res.data;

            const { temp, humidity, pressure } = data.main;
            const { main: weathermood } = data.weather[0];
            const { name } = data;
            const { speed } = data.wind;
            const { country, sunset } = data.sys;

            const myNewWeatherInfo = {
                temp,
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                country,
                sunset,
            }

            setTempInfo(myNewWeatherInfo);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getWeatherInfo();
    }, []);


    return (
        <div className='app'>
            <div className='wrap'>
                <div className='search'>
                    <input type='search' placeholder='Enter the city name...' autoFocus id='search' className='searchTerm' value={searchValue} onChange={(e) => setSearchValue(e.target.value)}></input>
                    <button className='searchButton' type='button' onClick={getWeatherInfo}>Search</button>
                </div>
            </div>

            {/*our weather card */}
            <WeatherCard tempInfo={tempInfo}></WeatherCard>
            {console.log(tempInfo)}
        </div>
    )
}

export default WeatherApp2;