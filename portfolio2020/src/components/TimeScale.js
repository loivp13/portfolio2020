import React, { Component } from 'react'

export class TimeScale extends Component {
    render() {
        return (
                <div className="TimeScale">
                    <div className="TimeScale--line"></div>
                    <div className="TimeScale--pointer">
                        <div className="TimeScale--pointer-triangle"></div>
                        <div className="TimeScale--pointer-hrLine"></div>
                        <div className="TimeScale--pointer-vtLine"></div>
                        <div className="TimeScale--pointer-dates">
                            <div className="TimeScale--pointer-date">Oct.</div>
                            <div className="TimeScale--pointer-date">Jul.</div>
                        </div>
                    </div>
                    <div className="TimeScale--circles">
                        <div className="TimeScale--circle"></div>
                        <div className="TimeScale--circle"></div>
                        <div className="TimeScale--circle"></div>
                    </div>
                    <div className="TimeScale--dates">
                        <div className="TimeScale--date">2021</div>
                        <div className="TimeScale--date">2020</div>
                        <div className="TimeScale--date">2019</div>
                    </div>
                </div>
        )
    }
}

export default TimeScale
