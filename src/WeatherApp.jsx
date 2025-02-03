import {useState} from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
export default function WeatherApp(){
    let [weatherInfo,setweatherInfo]=useState({
        city:"mumbai",
        humidity:87,
        pressure:1010,
        temp:24.42,
        temp_max:24.42,
        temp_min:24.42,
        weather:"moderate rain"   
    })
    let updateInfo=(result)=>{
        setweatherInfo(result)
    }
    return(
        <div>
            <h4>Weather App by Delta</h4>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}