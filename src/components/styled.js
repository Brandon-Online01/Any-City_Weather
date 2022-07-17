import styled from 'styled-components'

export const Container = styled.div`
    text-align: center;
`;

export const Header = styled.h1`
    color: #ffffff;
`;

export const WeatherSection = styled.div`
    width: 50%;
    margin: 100px auto;
`;

export const FormWrapper = styled.div`
    max-width: 500px;
    margin: 0 auto;
    display: flex;
`;

export const InfoBody = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    margin: 50px 0 0 0;
    color: #fff;
    font-weight: 700;
`;

export const WeatherElement = styled.div`
`;

export const WeatherHeader = styled.p`
    color: #ffffff
`;

export const WeatherValues = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

export const WeatherInfo = styled.p`
    color: #ffffff
`;

export const WeatherIcon = styled.img`
    width: 30px;
    height: 30px;
`