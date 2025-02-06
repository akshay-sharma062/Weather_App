
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
      axios.get(`http://api.weatherapi.com/v1/current.json?key=969eacd94fd14050846105856250602&q=${City}&aqi=yes`
          ).then(
            (response)=>{
              // console.log(response.data)
              setWeather(response.data)
            }
          ).catch(
            (err)=>console.log(err)
          )
    }
  }
  return (
    <>
    <div className="p-15 px-20 m-30 sm:w-6xl text-center  font-bold  shadow-2xl shadow-black rounded-2xl bg-transparent">

      <Search searchData={City} eventHandler={changeSearch} searchWeather={searchWeatherHandle}/>
      <Result resultData={Weather}/>

    </div>
    </>
  )
}

export default App
