import React, { Component } from 'react';

const CurrentWeather = (props) => {
    let display_place;

    // confirm the entered location
    
    if(props.Locdata.results[0].components.station){
        display_place = props.Locdata.results[0].components.station +", "+(props.Locdata.results[0].components.country_code).toUpperCase();
    }
    else if(props.Locdata.results[0].components.city){
        display_place = props.Locdata.results[0].components.city +", "+(props.Locdata.results[0].components.country_code).toUpperCase();
    }
    else if(props.Locdata.results[0].components.county){
        display_place = props.Locdata.results[0].components.county +", "+(props.Locdata.results[0].components.country_code).toUpperCase();
    }
    else if(props.Locdata.results[0].components.state){
        display_place = props.Locdata.results[0].components.state +", "+(props.Locdata.results[0].components.country_code).toUpperCase();
    }
    else if(props.Locdata.results[0].components.country){
        display_place = props.Locdata.results[0].components.country;
    }
    else{
        display_place = props.Locdata.results[0].components.country;
    }
    
    const weatherID = props.Weatherdata.current.weather[0].icon;

    return ( 
        <div className="current-weather" >
            <div className="main-details">
                <span ><img className="current-temp-icon" src={`http://openweathermap.org/img/wn/${weatherID}@2x.png`} /> </span>
                <span className="current-temp">{Math.floor(props.Weatherdata.current.temp)}&deg;</span>
                <span className="place-name">{display_place}</span> 
            </div>
            {/* <div className="extra-details">
                <span className="current-details humidity">Humidity: {props.Weatherdata.current.humidity}</span>
                <span className="current-details clouds">Clouds: {props.Weatherdata.current.clouds}</span>
                <span className="current-details pressure">Pressure: {props.Weatherdata.current.pressure}</span>
                <span className="current-details wind">Wind: {props.Weatherdata.current.wind_speed}</span>
            </div> */}
        </div>
     );
}
 
export default CurrentWeather;
 


 
