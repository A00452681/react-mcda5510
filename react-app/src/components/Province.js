import React, { Component } from "react"
import './styles.css';

class Province extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShowCapital: false
        }
    }

    render() {
        return (
            <div className="province-container">
                <img alt={`${this.props.name}'s Flag`} width={125} src={this.props.flagUrl} />
                <div>
                    <h3>{this.props.name}</h3>
                    {this.state.isShowCapital ? <p>Halifax</p> : undefined}
                </div>
                <button onClick={() => this.setState({ isShowCapital: !this.state.isShowCapital })}>Show Capital</button>
            </div>
        )
    }
}

export default Province;

/**
 * Topics you might also like:
 *      - Object Destructuring -> https://dmitripavlutin.com/javascript-object-destructuring/
 *      - Template Literals -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 *      - Rendering Elements -> https://reactjs.org/docs/rendering-elements.html
 */