import React from 'react';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import tempIcon from './assets/icons/temperature.png'
import HumidityIcon from './assets/icons/humidity.png'
import WindDirection from './assets/icons/windock.png'
import WindSpeed from './assets/icons/anemometer.png'
import CloudCover from './assets/icons/clouds.png'

import { Container } from './components/styled';
import { WeatherSection } from './components/styled'
import { Header } from './components/styled';
import { FormWrapper } from './components/styled';
import { InfoBody } from './components/styled';
import { WeatherElement } from './components/styled';
import { WeatherHeader } from './components/styled';
import { WeatherValues } from './components/styled';
import { WeatherIcon } from './components/styled';
import { WeatherInfo } from './components/styled';

const App = () => {
    // const notify = () => toast("Wow so easy !");

    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition ( position => {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
        });

    }, []);

    const [requestedCity, setRequestedCity] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (requestedCity.length < 3) {
            toast.error('Enter city name, or Full city name')
        }
        else {
            toast.success('Great, Busy Searching......')
            console.log(requestedCity)
        }
    }

    return (
        <div className="App">
            <Container>
                <WeatherSection>
                    <Header>Any City Weather</Header>
                    <FormWrapper>
                    <form className='weather-section__form' onSubmit={handleSubmit}>
                            <input  type='text'
                                    value={requestedCity} 
                                    onInput={e => setRequestedCity(e.target.value)} 
                                    placeholder='Enter any city'/>
                            <button type='submit' 
                                    className='weather-section__btn' 
                                    onClick={handleSubmit}>Check</button>
                    </form>
                    </FormWrapper>
                    <InfoBody>
                        <WeatherElement>
                            <WeatherHeader>Temperature</WeatherHeader>
                            <WeatherValues>
                                <WeatherIcon src={tempIcon} alt="Any City Weather" />
                                <WeatherInfo>°C</WeatherInfo>
                            </WeatherValues>
                        </WeatherElement>
                        <WeatherElement>
                            <WeatherHeader>Humidity</WeatherHeader>
                            <WeatherValues>
                                <WeatherIcon src={HumidityIcon} alt="Any City Weather" />
                                <WeatherInfo>%</WeatherInfo>
                            </WeatherValues>
                        </WeatherElement>
                        <WeatherElement>
                            <WeatherHeader>Wind Speed</WeatherHeader>
                            <WeatherValues>
                                <WeatherIcon src={WindSpeed} alt="Any City Weather" />
                                <WeatherInfo>km/hr</WeatherInfo>
                            </WeatherValues>
                        </WeatherElement>
                        <WeatherElement>
                            <WeatherHeader>Wind Direction</WeatherHeader>
                            <WeatherValues>
                                <WeatherIcon src={WindDirection} alt="Any City Weather" />
                                <WeatherInfo>Direction</WeatherInfo>
                            </WeatherValues>
                        </WeatherElement>
                        <WeatherElement>
                            <WeatherHeader>Cloud Cover</WeatherHeader>
                            <WeatherValues>
                                <WeatherIcon src={CloudCover} alt="Any City Weather" />
                                <WeatherInfo>%</WeatherInfo>
                            </WeatherValues>
                        </WeatherElement>
                    </InfoBody>
                    <InfoBody>
                        <WeatherElement>
                            <WeatherHeader>Temperature</WeatherHeader>
                            <WeatherValues>
                                <WeatherIcon src={tempIcon} alt="Any City Weather" />
                                <WeatherInfo>°C</WeatherInfo>
                            </WeatherValues>
                        </WeatherElement>
                        <WeatherElement>
                            <WeatherHeader>Humidity</WeatherHeader>
                            <WeatherValues>
                                <WeatherIcon src={HumidityIcon} alt="Any City Weather" />
                                <WeatherInfo>%</WeatherInfo>
                            </WeatherValues>
                        </WeatherElement>
                        <WeatherElement>
                            <WeatherHeader>Wind Speed</WeatherHeader>
                            <WeatherValues>
                                <WeatherIcon src={WindSpeed} alt="Any City Weather" />
                                <WeatherInfo>km/hr</WeatherInfo>
                            </WeatherValues>
                        </WeatherElement>
                        <WeatherElement>
                            <WeatherHeader>Wind Direction</WeatherHeader>
                            <WeatherValues>
                                <WeatherIcon src={WindDirection} alt="Any City Weather" />
                                <WeatherInfo>Direction</WeatherInfo>
                            </WeatherValues>
                        </WeatherElement>
                        <WeatherElement>
                            <WeatherHeader>Cloud Cover</WeatherHeader>
                            <WeatherValues>
                                <WeatherIcon src={CloudCover} alt="Any City Weather" />
                                <WeatherInfo>%</WeatherInfo>
                            </WeatherValues>
                        </WeatherElement>
                    </InfoBody>
                </WeatherSection>
            </Container>
            <ToastContainer />
        </div>
    );
}

export default App;
