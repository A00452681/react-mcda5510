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
        console.log(this.state)
        return(
            <div className = "aboutMe-container">
                <div>
                    {this.state.isShowParagraph === true ? <h2>{this.props.name}</h2> : undefined}
                    {this.state.isShowParagraph === true ? <p>{this.props.firstParagraph}</p> : undefined}
                    {this.state.isShowParagraph === true ? <p>{this.props.secondParagraph}</p> : undefined}
                </div>
                <button className={this.state.isShowParagraph ? 'btn-capital-hide' : 'btn-capital-show'} 
                onClick={() => this.click()}>{this.state.isShowParagraph ? "Hide About Me" : "Show About Me"}</button>
            </div>
            
        )
    }
}

export default AboutMe;