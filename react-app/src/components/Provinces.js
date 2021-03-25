import React, { Component } from "react"
import Province from "./Province"

import './styles.css';

class Provinces extends Component {
    render() {
        return (
            <div>
                <Province name="Ontario" capital="Toronto" flagUrl="https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Ontario.svg" />
                <Province name="Quebec" capital="Quebec City" flagUrl="https://upload.wikimedia.org/wikipedia/commons/5/5f/Flag_of_Quebec.svg" />
                <Province name="Nova Scotia" capital="Halifax" flagUrl="https://upload.wikimedia.org/wikipedia/commons/c/c0/Flag_of_Nova_Scotia.svg" />
                <Province name="Manitoba" capital="Winnipeg" flagUrl="https://upload.wikimedia.org/wikipedia/commons/c/c4/Flag_of_Manitoba.svg" />
                <Province name="Alberta" capital="Edmonton" flagUrl="https://upload.wikimedia.org/wikipedia/commons/f/f5/Flag_of_Alberta.svg" />
            </div>
        )
    }
}

export default Provinces;