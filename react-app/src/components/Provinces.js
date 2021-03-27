import React, { Component } from "react"
import Province from "./Province"

class Provinces extends Component {
    render() {
        return (
            <div>
                <Province name="Nova Scotia" capital="Halifax" flagUrl="https://upload.wikimedia.org/wikipedia/commons/c/c0/Flag_of_Nova_Scotia.svg" />
                <Province name="Ontario" capital="Toronto" flagUrl="https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Ontario.svg" />
                <Province name="Quebec" capital="Quebec City" flagUrl="https://upload.wikimedia.org/wikipedia/commons/5/5f/Flag_of_Quebec.svg" />
                <Province name="New Brunswick" capital="Fredericton" flagUrl="https://upload.wikimedia.org/wikipedia/commons/f/fb/Flag_of_New_Brunswick.svg" />
            </div>
        )
    }
}

export default Provinces;

/**
 * Topics you might also like:
 *      - Array.map() -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */

/**
 * Paste this code above (instead of the div in the render())
 *
    <div>
        {provinces.map(province => {
            return <Province name={province.name} capital={province.capital} flagUrl={province.flagUrl} />
        })}
    </div>
 *
 *
 *
 * Import provinces-data.js:
 *
    import provinces from '../data/provinces-data'
 */