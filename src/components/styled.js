import styled from 'styled-components'

export const Container = styled.div`
    text-align: center;
`;

export const Header = styled.h1`
    color: #ffffff;
`;

export const WeatherSection = styled.div`
    width: 100%;
    margin: 100px auto;
`;

export const FormWrapper = styled.div`
    display: flex;
`;

export const Form = styled.div`
    width: 100%;
    text-align: center;
`

export const Input = styled.input`
    padding: 15px;
    border: 1px solid #b8b8b8;
    border-radius: 5px 0 0 5px;
    transition: 0.2s all ease-in-out;
    font-size: 16px;
    max-width: 180px;

    &:hover {
        border: 1px solid #009425;

        &:focus {
            outline: none;
            border: 1px solid #009425;

            &::placeholder {
                font-style: italic;
                font-weight: 100;
            }
        }
    }
`

export const Button = styled.button`
    background-color: transparent;
    color: #ffffff;
    padding: 15px;
    border: 1px solid #009425;
    border-radius: 0 5px 5px 0;
    transition: 0.2s all ease-in-out;
    font-size: 16px;
    cursor: pointer;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 2px;

    &:hover {
        background-color: #009425;
    }
`

export const InfoBody = styled.div`
    gap: 10px;
    display: flex;
    color: #ffffff;
    margin: 50px 0;
    flex-wrap: wrap;
    font-weight: 700;
    text-align: center;
    align-items: center;
    justify-content: space-evenly;
`;

export const WeatherElement = styled.div`
    max-width: 250px;
    width: 100%;
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
`;