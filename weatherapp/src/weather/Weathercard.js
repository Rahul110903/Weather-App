import React, { useState, useEffect } from "react"

const Weathercard=({myNewWeatherInfo})=>{
    const [weatherIcons,setweatherIcons]=useState("")

    const {name,country,temp,humidity,pressure,weathermood,sunset,speed}=myNewWeatherInfo

    let sec=sunset
    let date=new Date(sec*1000)
    let timeStr=`${date.getHours()}:${date.getMinutes()}`

    useEffect(()=>{
        if(weathermood){
            switch (weathermood) {
                case "Clouds": setweatherIcons("wi-day-cloudy")
                    break;
                case "Haze": setweatherIcons("wi-fog")
                    break;
                case "Clear": setweatherIcons("wi-day-sunny")
                    break;
                case "Mist": setweatherIcons("wi-dust")
                    break;
                case "Rain": setweatherIcons("wi-rain")
                    break;
                case "Snow": setweatherIcons("wi-snow")
                    break;    
                default:
                    setweatherIcons("wi-sunny")
                    break;
            }
        }
    },[weathermood])

    return(
        <>
            <article className="widget" >
                <div className="weatherIcon">
                    <i className={weatherIcons}></i>
                </div>
                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{temp}&deg;</span>
                        <div className="description">
                            <div className="weathercondition">{weathermood}</div>
                            <div className="place">
                                {name}, {country}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="date">{new Date().toLocaleString()}</div>
                
                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p><i className={"wi wi-sunset"}></i></p>
                            <p className="extra-info-leftside">
                                {timeStr} <br/>
                                Sunset
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p><i className={"wi wi-humidity"}></i></p>
                            <p className="extra-info-leftside">
                                {humidity} <br/>
                                Humidity
                            </p>
                        </div>
                    </div>

                    <div className="weather-extra-info">
                            <div className="two-sided-section">
                                <p><i className={"wi wi-rain"}></i></p>
                                <p className="extra-info-leftside">
                                    {pressure} <br/>
                                    Pressure
                                </p>
                            </div>
                            <div className="two-sided-section">
                                <p><i className={"wi wi-strong-wind"}></i></p>
                                <p className="extra-info-leftside">
                                    {speed} <br/>
                                    Speed
                                </p>
                            </div>
                        </div>
                </div>
            </article>
        </>
    )
}
export default Weathercard