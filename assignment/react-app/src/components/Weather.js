import React, { Component } from "react";
import { render } from "react-dom";

import weather from '../data/Weather-data'

class Weather extends Component{
    constructor(props){
        super(props)

        this.state = {
            temperature: ''
        }
        this.fetchData = this.fetchData.bind(this)
    }

    fetchData(){
        fetch("https://api.covid19tracker.ca/summary").then(response => {
            return response.json()
        })
        .then(response => {
            console.log(response);
            this.setState({
                temperature: response.data[0].total_cases
               
            })
        });
    }

    componentDidMount() {
        this.fetchData()
    }
   
    render() {
        return (
            <div>
               <div>
                   <p><b>Temperature: </b>{this.state.temperature}</p>
                </div>
            </div>
        )
    }

    
}


export default Weather;