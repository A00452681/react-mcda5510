import React, { Component } from "react";
import { render } from "react-dom";

class Town extends Component{
    constructor(props){
        super(props)

        this.state = {
            isShowCity: false
        }
    }

    click(){
        this.setState({ isShowCity: !this.state.isShowCity})
    }
    
    render(){
        console.log(this.state)
        return(
            <div class = "town-container">
                <div>
                    {this.state.isShowCity ? <img alt={this.props.name} width={400} src={this.props.flagUrl}/> : undefined}
                    {this.state.isShowCity ? <h2>{this.props.name}</h2> : undefined}
                </div>
                <button className={this.state.isShowCity ? 'btn-capital-hide' : 'btn-capital-show'} 
                onClick={() => this.click()}>{this.state.isShowCity ? "Hide Town" : "Show Town"} </button>
            </div>
            
        )
    }
}

export default Town;