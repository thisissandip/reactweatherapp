import React from 'react';
import ForeCastBox from "./ForeCastBox"

const ForeCast = (props) => {

    const dateObj = new Date();
    const weekday =  ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const nextDay = (dateObj.getDay() + 1);

    const firstHalf = weekday.slice(nextDay, 7);
    const secondHalf = weekday.slice(0, nextDay);
    const next7Days = firstHalf.concat(secondHalf);

    const next8daysweather = props.Forecastdata;
    
    const next7daysweather = next8daysweather.slice(1, 7)

    next7daysweather.map((item,index) => {
        item.day = next7Days[index];
    })


    const displayMe = next7daysweather.map((item,index) => 
        <ForeCastBox key={index} 
        day ={item.day}
        temp={item.temp.max} 
        wind = {item.wind_speed}
        humidity = {item.humidity}
        weathericon = {item.weather[0].icon}
        />
    )
    
    return ( 
        <div className="forecast-parent-box" >
            
             {displayMe}
        </div>
     );
}
 
export default ForeCast;