import React, { Component } from 'react'

import TimeScale from './TimeScale'
import Carousel from './Carousel'

import gameAppSVG from '../assets/GameApp.svg';
import gameDealsSVG from '../assets/GameDeals.svg';
import netflixSVG from '../assets/Netflix.svg';

import gameDealsHeaderPNG from '../assets/GameDealsHeader.png';
import gameAppHeaderPNG from '../assets/GameAppHeader.png';
import netflixHeaderPNG from '../assets/NetflixHeader.png';
import midWave from '../assets/midWave.png'



export class Portfolio extends Component {
    render() {
        return (
            <div id='portfolio' className='Portfolio'>
                <img className='Portfolio_background' src={midWave} alt=""/>
                <div className="Portfolio_container">
                    <div className="Portfolio_header">
                        Portfolio
                    </div>
                    <div className="Portfolio_main">
                        <div className="Portfolio_main--left">
                            <TimeScale></TimeScale>
                        </div>
                        <div className="Portfolio_main--right">
                            <Carousel></Carousel>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio
