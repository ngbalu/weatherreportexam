import React, {useState} from 'react'
import { CiTempHigh } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { RiTimeZoneFill } from "react-icons/ri";
import { WiHumidity } from "react-icons/wi";
import { MdWindPower } from "react-icons/md";
import { TbWorldLongitude } from "react-icons/tb";
import { TbWorldLatitude } from "react-icons/tb";

 import './App.css'

function App() {
  


const[city,setCity]=useState("")
const [result,setRessult]=useState("")
const [final,setFinal]=useState("")
const [zone,setZone]=useState("")
const [humidity,setHumidity]=useState("")
const [speed,setSpeed]=useState("")
const [lon,setLon]=useState("")
const [lat,setLat]=useState("")



const changeHandler=event=>{
  setCity(event.target.value)
}


const submitHandler=e=>{
  e.preventDefault()
  
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8f79c1f68cc3a0dba8360386f86e6aad`)
  .then(response=>response.json())
  .then(data=>{
    const kelvin=data.main.temp
    const celsius= kelvin - 273.15
    const name=data.name
    const TimeZone=data.timezone
    const humidity=data.main.humidity
    const speed=data.wind.speed
    const lan=data.coord.lon
    const lat=data.coord.lat
    setRessult(Math.round(celsius))
    setFinal(name)
    setZone(TimeZone)
   setHumidity(humidity)
   setSpeed(speed)
   setLon(lan)
   setLat(lat)
   
  })
  
  }
  

  return(
    <div className='countainer'>
     <h1>Weather App</h1>
    <form onSubmit={submitHandler} className='form'>
    <input type="text" placeholder="Enter city name" onChange={changeHandler} value={city} className='search'/>
    <button type="button" className='button'>Search</button>
    <div className='sub-countainer'>
     <h3 className='heading'>Current location <IoLocationOutline /> : <span className='fila'>{final}</span></h3>
     <h3 className='heading'>Temperature <CiTempHigh/>: <span className='fila'>{result}  </span></h3>
     <h3 className='heading'>Timezone <RiTimeZoneFill />: <span className='fila'>{zone}  </span></h3>
     <h3 className='heading'>humidity <WiHumidity />: <span className='fila'>{humidity}  </span></h3>
     <h3 className='heading'> lon <TbWorldLongitude />: <span className='fila'>{lon}  </span></h3>
     <h3 className='heading'> lat <TbWorldLatitude />: <span className='fila'>{lat}  </span></h3>
     <h3 className='heading'>wind speed <MdWindPower />: <span className='fila'>{speed} </span></h3>
     </div>
    </form>
     
      
    </div>
  )
}

export default App