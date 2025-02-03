import {useState,useEffect} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
export default function SearchBox({updateInfo}){
    let [city,setcity]=useState("");
    let [Error,setError]=useState(false);
    //"https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"
    let API_URL="https://api.openweathermap.org/data/2.5/weather";
    let API_KEY="0e395c80fdc5993099a0ee0cfc902ed7";
    async function getResponse(){
        try{
       let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
       //we follow same pattern of actual url
       let jsonResponse=await response.json();
       console.log(jsonResponse);
      let result={
        city:city,
        temp:jsonResponse.main.temp,
        temp_max:jsonResponse.main.temp_max,
        temp_min:jsonResponse.main.temp_min,
        humidity:jsonResponse.main.humidity,
        pressure:jsonResponse.main.pressure,
        weather:jsonResponse.weather[0].description,
       }
       console.log(result);
       setError(false);
    return result;
    }
    catch(err){
        throw err;
    }
}
    let handleChange=(event)=>{
        setcity(event.target.value);
    }
    let handleSubmit=async (event)=>{
        try{
       event.preventDefault();
       let newInfo=await getResponse();
       updateInfo(newInfo);
       setcity("");
        }
        catch(err){
            setError(true);
            setcity("");
        }
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
            <br></br><br></br>
            <Button variant="contained" type="submit">Search</Button>
            <br></br><br></br>
            {Error&& <Alert severity="error">No such city exists</Alert>}
            </form>
        </div>
    )
}