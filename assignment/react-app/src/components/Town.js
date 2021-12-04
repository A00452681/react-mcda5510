import React, { Component } from "react";
import { render } from "react-dom";
import weather from '../data/Weather-data'

class Town extends Component{
    constructor(props){
        super(props)

        this.state = {
            isShowCity: false,
            temperature: '',
            weatherImg: ''
        }
        this.fetchData = this.fetchData.bind(this)
    }

    click(){
        this.setState({ isShowCity: !this.state.isShowCity})
       
    }
    fetchData(){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=Halifax&appid=eb1db9c9cbb543967dcc31ad023abdca").then(response => {
            return response.json()
        })
        .then(response => {
            console.log(response);
            this.setState({
                temperature: response.main.temp            
            })
        });
    }

    componentDidMount() {
        this.fetchData()
    }

    convertTemp(){

    }
    render(){
        console.log(this.state)
        return(
            <div class = "town-container">
                <div>
                    <a href="#" onClick={() => this.click()}>  My Town </a>  
                    {this.state.isShowCity ? <img alt={this.props.name} width={400} src={this.props.flagUrl}/> : undefined}
                    {this.state.isShowCity ? <h2>{this.props.name}</h2> : undefined}
                    {this.state.isShowCity ? <img alt={this.props.name} width={75} src={this.props.weatherUrl}/> : undefined}
                    {this.state.isShowCity ? <p>{`${this.state.temperature} °C`}</p> : undefined}
                    {this.state.isShowCity ? <button onClick={() => this.convertTemp(this.state.temperature)}> Change to °F </button> : undefined}
                    {/* <button className={this.state.isShowCity ? 'btn-capital-hide' : 'btn-capital-show'} 
                    onClick={() => this.click()}>{this.state.isShowCity ? "Hide Town" : "Show Town"} </button> */}
                </div>
               
            </div>
            
        )
    }

    
}

export default Town;