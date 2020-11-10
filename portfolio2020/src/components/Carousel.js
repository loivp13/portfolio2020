import React, { Component } from 'react'

import myFoodieDiarySVG from '../assets/MyFoodieDiary.svg';
import myFoodieDiaryHeaderPNG from '../assets/MyFoodieDiaryHeader.png';


export class Carousel extends Component {
    render() {
        return (
            <div>
                <div className="Carousel">
                    <div className="Carousel--item">
                        <div className="Carousel--item-image">
                            <img src={myFoodieDiarySVG} alt="" srcSet=""/>
                            <img src={myFoodieDiaryHeaderPNG} alt="" srcSet=""/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Carousel
