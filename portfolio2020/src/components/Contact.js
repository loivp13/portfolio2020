import React, { Component } from 'react'

import botWave from '../assets/BotWave.png'
import gmailPNG from '../assets/googleMail.png'
import gitHubLogoPNG from '../assets/gitHubLogo.png'
import linkedInPNG from '../assets/LinkedIn.png'

export class Contact extends Component {
    render() {
        return (
            <div className='Contact'>
               <img className='Contact_background' src={`${botWave}`} alt=""/>
               <div className="Contact_container">
                <div className="Contact_header">Contact</div>
                <div className="Contact_menu">
                    <div className="Contact_menu--item">
                        <img src={gmailPNG} alt=""/>
                    </div>
                    <div className="Contact_menu--item">
                        <img src={gitHubLogoPNG} alt=""/>

                    </div>
                    <div className="Contact_menu--item">
                        <img src={linkedInPNG} alt=""/>

                    </div>
                </div>
               </div>

            </div>
        )
    }
}

export default Contact
