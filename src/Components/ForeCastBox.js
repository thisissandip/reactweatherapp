import React from 'react';

const ForeCastBox = (props) => {

    return ( 
        <div className="forecast-child-box" >

          <span >
            <img className="forecast-temp-icon" src={`http://openweathermap.org/img/wn/${props.weathericon}@2x.png`} />
          </span>

          <div className="forecast-details">
            <span className="day-name"> 
            {props.day}
            </span>

            <span className="temp"> 
            {Math.floor(props.temp)}&deg;
            </span>

            <span className="humidity">
            Humidity: {props.humidity}
            </span>

            <span className="wind">
            Wind: {props.wind}
            </span>
           </div>
        </div>
     );
}
 
export default ForeCastBox;