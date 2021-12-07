import React from 'react'
import './styles.css'

class ChangeButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            setCelcius: false
        }
    }

    render() {
        return (
            this.state.setCelcius ?
                <button className="btn btn-unlike" onClick={() => this.setState({ setCelcius: false })}>Change to °C</button>
                :
                <button className="btn btn-like" onClick={() => this.setState({ setCelcius: true })}>Change to °F</button>
        )
    }
}

export default ChangeButton;