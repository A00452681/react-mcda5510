import React, { Component } from "react"
import Province from "./Province"

import provinces from '../data/provinces-data'

class Provinces extends Component {
    render() {
        return (
            <div>
                {provinces.map(province => {
                    return <Province key={province.name} name={province.name} capital={province.capital} flagUrl={province.flagUrl} />
                })}
            </div>
        )
    }
}

export default Provinces;