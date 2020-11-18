import React, { Component } from 'react'
import portfolioImage from '../assets/gitHubLogo.png'

export class AboutMe extends Component {
    render() {
        return (
            <div id='aboutMe'className='AboutMe'>
                <div className="AboutMe_container">
                    <div className="AboutMe_left">
                        <div className="AboutMe_left-header">
                            About Me
                        </div>
                        <div className="AboutMe_left-image">
                            <img src={`${portfolioImage}`} alt=""/>
                        </div>
                    </div>
                    <div className="AboutMe_right">
                        <div className="AboutMe_right-description">
                            Hello there! My name is Loi Pham and I have been doing web development since 2017. I specialize in React and it's ecosystem for the Front End and NodeJS for the Back End. I'm continiously adding more tools under my belt as I continue my journey developing websites and apps.
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default AboutMe
