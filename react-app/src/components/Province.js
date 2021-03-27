import React, { Component } from "react"

class Province extends Component {
    render() {
        return (
            <div className="province-container">
                <img alt={`${this.props.name}'s Flag`} width={125} src={this.props.flagUrl} />
                <h3>{this.props.name}</h3>
                <button className="btn-capital">Show Capital</button>
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