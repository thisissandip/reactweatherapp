import React from "react"
import CurrentWeather from "./CurrentWeather"
import Forecast from "./ForeCast"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,fa } from '@fortawesome/free-solid-svg-icons'

export default class GetLocation extends React.Component{
    constructor(){
        super();
        this.state ={
            enteredlocation: "Mumbai",
            LocationAPIDATA: {},
            WeatherAPIDATA: {},
            myLocationName: null,
            myLat: null,
            myLng: null,
            contentloaded: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.Location = this.Location.bind(this);
        this.Weather = this.Weather.bind(this);
        this.PressedEnter = this.PressedEnter.bind(this);
    }

    componentDidMount() {
        //Fetch Default location
        this.Location();

    }

    handleChange(event){
        const {value, name} = event.target;
        this.setState({
            [name]: value
        })
    }



    Location(){
        const loc =  this.state.enteredlocation;
        fetch(` https://api.opencagedata.com/geocode/v1/json?q=${loc}&key=565adc4e5b404eb3a0d2e66df10b4a49`)
        .then(response => response.json())
        .then(Locationapidata => 
            {   
                console.log(Locationapidata);

                this.setState({
                    LocationAPIDATA: Locationapidata,
                    myLat: Locationapidata.results[0].geometry.lat,
                    myLng: Locationapidata.results[0].geometry.lng,
                }) 

                const lat = this.state.myLat;
                const long = this.state.myLng;
                this.Weather(lat,long);
            }
            ).catch(error => console.log(error));
    }

    Weather(lat,lon){
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&%20exclude=hourly,daily&appid=54175a73c73470b1810d761786a3154e`)
        .then(response => response.json())
        .then(weatherapidata => {
            console.log(weatherapidata);
            this.setState({
                WeatherAPIDATA: weatherapidata,
                contentloaded: true
            })
        })   
        .catch(error => console.log(error));   
    }

    PressedEnter(e){
        if(e.keyCode == 13){
            this.Location();
        }
    }

    render(){

        return(
            <>
            {this.state.contentloaded ? 
            <>
                <div className="input-box-container">
                <span className="logo">theweather.co</span>
                    <div className="input-box">
                        <input className="input-location" 
                                type="text" name="enteredlocation" 
                                value={this.state.location}
                                placeholder="Enter Location" 
                                onChange={this.handleChange} 
                                onKeyDown = {this.PressedEnter} />

                        <FontAwesomeIcon className="search-button" onClick={this.Location} icon={faSearch} />
                    </div>
                </div>
                
                <CurrentWeather Locdata={this.state.LocationAPIDATA} 
                                enteredlocation={this.state.enteredlocation} 
                               Weatherdata = {this.state.WeatherAPIDATA} /> 
       
                <Forecast Forecastdata={this.state.WeatherAPIDATA.daily} />
            </>
            : <img className="loader" src={require('../imgs/hourglass.gif')} />}


            </>

        )
    }
}

