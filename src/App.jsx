
import { useEffect, useState } from "react"
import Result from "./components/Result"
import Search from "./components/Search"
import axios from "axios"
function App() {

  const [City,setCity] = useState("");
  const [Weather,setWeather] = useState("");
  

  const changeSearch=(value)=>{
    setCity(value)
  }

  const searchWeatherHandle=()=>{
    if(City !==""){
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=3265874a2c77ae4a04bb96236a642d2f&units=metric`
          ).then(
            (response)=>console.log(response)
          ).catch(
            (err)=>console.log(err)
          )
    }
  }
  return (
    <>
    <div className="p-15 px-20 m-30 sm:w-6xl text-center   shadow-2xl shadow-black rounded-2xl bg-transparent">

      <Search searchData={City} eventHandler={changeSearch} searchWeather={searchWeatherHandle}/>
      <Result resultData={Weather}/>

    </div>
    </>
  )
}

export default App
