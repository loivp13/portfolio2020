import React, { Component } from 'react'

import myFoodieDiarySVG from '../assets/MyFoodieDiary.svg';
import netflixSVG from '../assets/Netflix.svg';
import gameAppSVG from '../assets/GameApp.svg';
import gameDealsSVG from '../assets/GameDeals.svg';

import myFoodieDiaryHeaderPNG from '../assets/MyFoodieDiaryHeader.png';
import netflixHeaderPNG from '../assets/NetflixHeader.png';
import gameDealsHeaderPNG from '../assets/GameDealsHeader.png';
import gameAppHeaderPNG from '../assets/GameAppHeader.png';

export class Carousel extends Component {

    render() {

        return (
                <div className="Carousel" onScroll={this.props.updateCurrentItemOnScroll}>
                    <div className="Carousel--item">
                        <div className="Carousel--item-image">
                            <img src={myFoodieDiarySVG} alt="" srcSet=""/>
                            <img src={myFoodieDiaryHeaderPNG} alt="" srcSet=""/>
                        </div>
                    </div>
                    <div className="Carousel--item">
                        <div className="Carousel--item-image">
                            <img src={netflixSVG} alt="" srcSet=""/>
                            <img src={netflixHeaderPNG} alt="" srcSet=""/>
                        </div>
                    </div>
                    <div className="Carousel--item">
                        <div className="Carousel--item-image">
                            <img src={gameAppSVG} alt="" srcSet=""/>
                            <img src={gameDealsHeaderPNG} alt="" srcSet=""/>
                        </div>
                    </div>
                    <div className="Carousel--item">
                        <div className="Carousel--item-image">
                            <img src={gameDealsSVG} alt="" srcSet=""/>
                            <img src={gameAppHeaderPNG} alt="" srcSet=""/>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Carousel
