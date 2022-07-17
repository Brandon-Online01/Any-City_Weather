import React from 'react';
import { useState, useEffect } from 'react';

import './App.css';

import tempIcon from './assets/icons/temperature.png'
import HumidityIcon from './assets/icons/humidity.png'
import windSpeed from './assets/icons/windock.png'
import cloudCover from './assets/icons/clouds.png'
import windDirection from './assets/icons/anemometer.png'



function App() {
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition ( position => {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
        });

    }, []);

    const[weatherData, setWeatherData] = useState([]);
    const [city, setCity] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`submitting + ${city} from geoposition + ${lat} + ${long}`)
    }

    return (
        <div className="App">
            <div className='container'>
                <div className='weather-section'>
                    <h1>Any City Weather</h1>
                    <div className='weather-section__search'>
                        <form className='weather-section__form' onSubmit={handleSubmit}>
                            <input  type='text'
                                    value={city} 
                                    onInput={e => setCity(e.target.value)} 
                                    placeholder='Enter any city'/>
                            <button type='submit' 
                                    className='weather-section__btn' 
                                    onClick={handleSubmit}>Check</button>
                        </form>
                    </div>
                    <div className='weather-section__body'>
                        <div className='weather-section__element'>
                            <p>Temp</p>
                            <div className='weather-section__values'>
                                <img src={tempIcon} className='weather-section__icon' alt='Element Icon'/>
                                <p>C</p>
                            </div>
                        </div>
                        <div className='weather-section__element'>
                            <p>Humidity</p>
                            <div className='weather-section__values'>
                                <img src={HumidityIcon} className='weather-section__icon' alt='Element Icon'/>
                                <p>%</p>
                            </div>
                        </div>
                        <div className='weather-section__element'>
                            <p>Wind Speed</p>
                            <div className='weather-section__values'>
                                <img src={windDirection} className='weather-section__icon' alt='Element Icon'/>
                                <p>km/hr</p>
                            </div>
                        </div>
                        <div className='weather-section__element'>
                            <p>Wind Direction</p>
                            <div className='weather-section__values'>
                                <img src={windSpeed} className='weather-section__icon' alt='Element Icon'/>
                                <p>Direction</p>
                            </div>
                        </div>
                        <div className='weather-section__element'>
                            <p>Cloud Cover</p>
                            <div className='weather-section__values'>
                                <img src={cloudCover} className='weather-section__icon' alt='Element Icon'/>
                                <p>%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
