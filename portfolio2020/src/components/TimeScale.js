import React, { Component } from 'react'

export class TimeScale extends Component {

      triggerPointerAnimation = () => {
         let pointerStyle = {top: '18%'}
        switch (this.props.currentItem){
            case 0:
                return pointerStyle
            case 1:
                 pointerStyle.top = '72%';
                 return pointerStyle
            case 2:
                 pointerStyle.top = '77%';
                 return pointerStyle
            case 3:
                 pointerStyle.top = '98%';
                 return pointerStyle
            default:
                break

            
                
            
        }
    }
    render() {
        return (
                <div className="TimeScale">
                    <div className="TimeScale--line"></div>
                   
                    <div className="TimeScale--circles">
                        <div className="TimeScale--circle"></div>
                        <div className="TimeScale--circle"></div>
                        <div className="TimeScale--circle"></div>
                    </div>
                    <div className="TimeScale--projectCircles">
                        <div className="TimeScale--pointer" style={this.triggerPointerAnimation()}>
                            <div className="TimeScale--pointer-triangle"></div>
                            <div className="TimeScale--pointer-hrLine"></div>
                            <div className="TimeScale--pointer-vtLine"></div>
                            <div className="TimeScale--pointer-dates">
                                <div className="TimeScale--pointer-date">{this.props.projectDates[0]}</div>
                                <div className="TimeScale--pointer-date">{this.props.projectDates[1]}</div>
                            </div>
                        </div>
                        <div className="TimeScale--smCircle1"></div>
                        <div className="TimeScale--smCircle2"></div>
                        <div className="TimeScale--smCircle3"></div>
                        <div className="TimeScale--smCircle4"></div>
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
