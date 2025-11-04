import loader from './assets/loader.svg'
import './App.css'
import { useState, useEffect } from 'react';

const APIKEY = import.meta.env.VITE_WEATHER_API

function App() {


  const[weatherData , setWeatherData] = useState(null)

  useEffect( () => {

    fetch(`http://api.airvisual.com/v2/nearest_city?key=${APIKEY}`)
    .then( response  => {
      console.log(response);
      return response.json();
    })
    .then( data => {
      console.log(data); 
    })
  }, [] )

  return (
    <main>
      <div className="loader-container">
        <img src={loader} alt="loading image " />
      </div>
      <p className="city-name"> Paris</p>
      <p className="country-name">France</p>
      <p className="temperatre">35</p>
      <div className="info-icon">
        <img src="/icons/01d.svg" alt="" />
      </div>
    </main>
  );
}
   
export default App;
