import React, { Component } from 'react'

export class FlipCard extends Component {
    render() {
        return (
            <div className='FlipCard'>
                <div className="FlipCard_inner">
                    <div className="FlipCard_front">
                        {this.props.front}
                    </div>
                    <div className="FlipCard_back">
                        {this.props.back}
                    </div>
                </div>
            </div>
        )
    }
}

export default FlipCard
