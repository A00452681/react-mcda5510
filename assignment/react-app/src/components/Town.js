import React, { Component } from "react";
import { render } from "react-dom";
import weather from '../data/Weather-data'
import ChangeButton from "./Advanced/ChangeButtonHooks";

class Town extends Component{
    constructor(props){
        super(props)

        this.state = {
            isShowCity: false,
            temperature: '',
            weatherImg: '',
        }
        this.fetchData = this.fetchData.bind(this)
    }

    click(){
        this.setState({ isShowCity: !this.state.isShowCity})
       
    }
    fetchData(){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=Halifax&units=metric&appid=eb1db9c9cbb543967dcc31ad023abdca").then(response => {
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

      
    render(){
        console.log(this.state)
        return(
            <div class = "town-container">
                <div>
                    <a href="#" onClick={() => this.click()}>  My Town </a>  
                    {this.state.isShowCity ? <img alt={this.props.name} width={400} src={this.props.flagUrl}/> : undefined}
                    {this.state.isShowCity ? <h2>{this.props.name}</h2> : undefined}
                    {this.state.isShowCity ? <p>{this.state.temperature > 20 ? <img alt='Sunny Weather.jpg' width={100} src = "https://raw.githubusercontent.com/simonachkar/react-mcda5510/main/assignment/assets/sunny.png" /> : this.state.temperature < 10 ? <img alt='Cold Weather.jpg' width={100} src = "https://raw.githubusercontent.com/simonachkar/react-mcda5510/main/assignment/assets/cold.png" /> : <img alt='Mild Weather.jpg' width={100} src = "https://raw.githubusercontent.com/simonachkar/react-mcda5510/main/assignment/assets/mild.png" />}</p>: undefined}
                    {this.state.isShowCity ? <p>{`${this.state.temperature} °C`}</p> : undefined}
                    {this.state.isShowCity ? <p><ChangeButton /></p> : undefined}
                   
                </div>
               
            </div>
            
        )
    }

    
}

export default Town;