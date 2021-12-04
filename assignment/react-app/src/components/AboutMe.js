import React, { Component } from "react";
import { render } from "react-dom";

class AboutMe extends Component{
    constructor(props){
        super(props)

        this.state = {
            isShowParagraph: false
        }
    }

    click(){
        this.setState({ isShowParagraph: !this.state.isShowParagraph})
     }

    render(){
        return(
            <div className = "aboutMe-container">
                <div>
                    <a href="#" onClick={() => this.click()}>  About Me </a> 
                    {this.state.isShowParagraph  ? <h2>{this.props.name}</h2> : undefined}
                    {this.state.isShowParagraph  ? <p>{this.props.firstParagraph}</p> : undefined}
                    {this.state.isShowParagraph  ? <p>{this.props.secondParagraph}</p> : undefined}
                </div>
               
            </div>
            
        )
    }
}

export default AboutMe;