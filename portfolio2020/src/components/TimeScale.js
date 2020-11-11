import React, { Component } from 'react'

export class TimeScale extends Component {

      triggerPointerAnimation = () => {
         let pointerStyle = {transform: 'translateY(0%)'}
        console.log(this.props.currentItem)
        switch (this.props.currentItem){
            case 0:
                return pointerStyle
            case 1:
                 pointerStyle.transform = 'translateY(155%)';
                 return pointerStyle
            case 2:
                 pointerStyle.transform = 'translateY(190%)';
                 return pointerStyle
            case 3:
                 pointerStyle.transform = 'translateY(295%)';
                 return pointerStyle

            
                
            
        }
    }
    render() {
        return (
                <div className="TimeScale">
                    <div className="TimeScale--line"></div>
                    <div className="TimeScale--pointer" style={this.triggerPointerAnimation()}>
                        <div className="TimeScale--pointer-triangle"></div>
                        <div className="TimeScale--pointer-hrLine"></div>
                        <div className="TimeScale--pointer-vtLine"></div>
                        <div className="TimeScale--pointer-dates">
                            <div className="TimeScale--pointer-date">{this.props.projectDates[0]}</div>
                            <div className="TimeScale--pointer-date">{this.props.projectDates[1]}</div>
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
