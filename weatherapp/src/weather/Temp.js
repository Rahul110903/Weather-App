import React, { useEffect, useState } from "react"
import "./style.css"
import Weathercard from "./Weathercard"

const Temp =()=>{

    const [searchValue,setsearchValue]=useState("Delhi")
    const [myNewWeatherInfo,setMyNewWeatherInfo]=useState("")


    const getDataValue=async ()=>{
        try {
            let url= `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=aa489b891c77f1d7ca9916ba0140f098`

            let res= await fetch(url);
            let data= await res.json()
            // const maindata = data.filter((element)=>{
            //     if(element.name===searchValue){
            //         return true
            //     }
            //     else{
            //         alert("Invalid , Please Enter a Valid City Name")
            //     }
            // })
            // console.log(maindata)

            // console.log(data)
            const {temp,humidity,pressure}=data.main
            const {main:weathermood}=data.weather[0]
            const{name}=data
            const {country,sunset}=data.sys
            const{speed}=data.wind

            const newWeatherInfo={
                name,country,temp,humidity,pressure,weathermood,sunset,speed
            }
            setMyNewWeatherInfo(newWeatherInfo)
            console.log(data)

            console.log(myNewWeatherInfo)


        } catch (error) {
            console.log(error)
            alert("Incorrect Name , Please Enter a Valid City Name")
        }
    }

    useEffect(()=>{
        getDataValue();
    },[])

    return(
        <>
            <div className="wrap">
                <div className="search">
                    <input type="search" placeholder="search..." autoFocus id="search" className="searchTerm" value={searchValue} onChange={(event)=>setsearchValue(event.target.value)}></input>
                    <button className="searchButton" type="button" onClick={getDataValue}>Search</button>
                </div>
            </div>
            <Weathercard myNewWeatherInfo={myNewWeatherInfo}/>
        </>
    )
}
export default Temp