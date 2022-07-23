import React from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import tempIcon from './assets/icons/temperature.png'
import HumidityIcon from './assets/icons/humidity.png'
import WindDirection from './assets/icons/windock.png'
import WindSpeed from './assets/icons/anemometer.png'
import CloudCover from './assets/icons/clouds.png'
import Sunset from './assets/icons/sunset.png'
import Sunrise from './assets/icons/sunrise.png'

import { Container } from './components/styled';
import { WeatherSection } from './components/styled'
import { Header } from './components/styled';
import { FormWrapper } from './components/styled';
import { Form } from './components/styled'
import { Input } from './components/styled'
import { Button } from './components/styled'
import { InfoBody } from './components/styled';
import { WeatherElement } from './components/styled';
import { WeatherHeader } from './components/styled';
import { WeatherValues } from './components/styled';
import { WeatherIcon } from './components/styled';
import { WeatherInfo } from './components/styled';

const App = () => {
    const [requestedCity, setRequestedCity] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (requestedCity.length < 3) {
            toast.error('Enter city name, or Full city name')
        }
        else {
            toast.success('Great, Busy Searching......')
        }
    }

    return (
        <div className="App">
            <Container>
                <WeatherSection>
                    <Header>Any City Weather</Header>
                    <FormWrapper>
                        <Form>
                            <Input  type='text' 
                                    value={requestedCity}
                                    onSubmit={handleSubmit} 
                                    placeholder='Any City Name'
                                    onInput={e => setRequestedCity(e.target.value)}
                            />
                            <Button
                                    type='submit'
                                    onClick={handleSubmit}
                            >Check</Button>
                        </Form>
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
                            <WeatherHeader>Sunrise</WeatherHeader>
                            <WeatherValues>
                                <WeatherIcon src={Sunset} alt="Any City Weather" />
                                <WeatherInfo>am</WeatherInfo>
                            </WeatherValues>
                        </WeatherElement>
                        <WeatherElement>
                            <WeatherHeader>Sunset</WeatherHeader>
                            <WeatherValues>
                                <WeatherIcon src={Sunrise} alt="Any City Weather" />
                                <WeatherInfo>pm</WeatherInfo>
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
