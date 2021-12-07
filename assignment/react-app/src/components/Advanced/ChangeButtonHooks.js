import React, { useState } from 'react'

import './styles.css'

const ChangeButton = () => {
    const [celsius, setCelcius] = useState(false)
    const [fahrenheit, setFahrenheit] = useState(false);

    return (
        celsius ?
            <button className="btn btn-unlike" onClick={() => setCelcius(false)}>Change to °C</button>
            :
            <button className="btn btn-like" onClick={() => setCelcius(true)}>Change to °F</button>
    )
}

export default ChangeButton;