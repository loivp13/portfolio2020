import React, { Component } from 'react'
import topWave from '../assets/TopWave.png'
import heroTitle from '../assets/Hero.png'

export class Hero extends Component {
    render() {
        return (
            <div className='Hero'>
              
                <img className='Hero_background' src={`${topWave}`} alt=""/>
                <div className="Hero_main">
                    <img src={`${heroTitle}`} alt=""/>
                </div>
                <a className='c_white Hero_scrollLink' href="#portfolio">View Portfolio</a>
            
            </div>
        )
    }
}

export default Hero
