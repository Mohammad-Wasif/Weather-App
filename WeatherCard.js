import React, { useEffect } from 'react';

const WeatherCard = ({
    temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset,
}) => {
    const [weatherState, setWeatheState] = React.useState("");

    useEffect(() => {
        if (weathermood) {
            switch (weathermood) {
                case "Clouds":
                    setWeatheState("wi-day-cloudy");
                    break;
                case "Haze":
                    setWeatheState("wi-fog");
                    break;
                case "Clear":
                    setWeatheState("wi-day-sunny");
                    break;
                case "Mist":
                    setWeatheState("wi-dust");
                    break;
                default:
                    break;
            }
        }
    }, [weathermood]);

    let sec = sunset;
    if (sec) {
        let date = new Date(sec * 1000);
        let timeStr = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        return (
            <>
                <article className='widget'>
                    <div className='weatherIcon'>
                        <i className={`wi ${weatherState}`}></i>
                    </div>
                    <div className='weatherInfo'>
                        <div className='temperature'>
                            <span>{temp}°c</span>
                        </div>
                        <div className='description'>
                            <div className='weatherCondition'>{weathermood}</div>
                            <div className='place'>{name},{country} </div>
                        </div>
                    </div>
                    <div className='date'>{new Date().toLocaleString()}</div>

                    {/*our 4 column section */}
                    <div className='extra-temp'>
                        <div className='temp-info-minmax'>
                            <div className='two-sided-section'>
                                <p><i className={"wi wi-sunset"}></i></p>
                                <p className='extra-info-leftside'>{timeStr} <br></br>Sunset</p>
                            </div>
                            <div className='two-sided-section'>
                                <p><i className={"wi wi-humidity"}></i></p>
                                <p className='extra-info-leftside'>{humidity} <br></br>Humidity</p>
                            </div>
                            <div className='two-sided-section'>
                                <p><i className={"wi wi-rain"}></i></p>
                                <p className='extra-info-leftside'> {pressure}<br></br>Pressure</p>
                            </div>
                            <div className='two-sided-section'>
                                <p><i className={"wi wi-strong-wind"}></i></p>
                                <p className='extra-info-leftside'>{speed} <br></br>Speed</p>
                            </div>
                        </div>
                    </div>
                </article>
            </>
        )
    } else {
        return (
            <>
                <article className='widget'>
                    <div className='weatherIcon'>
                        <i className={`wi ${weatherState}`}></i>
                    </div>
                    <div className='weatherInfo'>
                        <div className='temperature'>
                            <span>{temp}°c</span>
                        </div>
                        <div className='description'>
                            <div className='weatherCondition'>{weathermood}</div>
                            <div className='place'>{name},{country} </div>
                        </div>
                    </div>
                    <div className='date'>{new Date().toLocaleString()}</div>

                    {/*our 4 column section */}
                    <div className='extra-temp'>
                        <div className='temp-info-minmax'>
                            <div className='two-sided-section'>
                                <p><i className={"wi wi-sunset"}></i></p>
                                <p className='extra-info-leftside'>Sunset <br></br>-</p>
                            </div>
                            <div className='two-sided-section'>
                                <p><i className={"wi wi-humidity"}></i></p>
                                <p className='extra-info-leftside'>{humidity} <br></br>-</p>
                            </div>
                            <div className='two-sided-section'>
                                <p><i className={"wi wi-rain"}></i></p>
                                <p className='extra-info-leftside'>-<br></br>-</p>
                            </div>
                            <div className='two-sided-section'>
                                <p><i className={"wi wi-strong-wind"}></i></p>
                                <p className='extra-info-leftside'>{speed} <br></br>-</p>
                            </div>
                        </div>
                    </div>
                </article>
            </>
        )
    }
}

export default WeatherCard;