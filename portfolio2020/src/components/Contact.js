import React, { Component } from 'react'

import botWave from '../assets/BotWave.png'
import gmailPNG from '../assets/googleMail.png'
import gitHubLogoPNG from '../assets/gitHubLogo.png'
import linkedInPNG from '../assets/LinkedIn.png'
import FlipCard from '../components/FlipCard'

export class Contact extends Component {

    render() {
        return (
            <div id='contact' className='Contact'>
               <img className='Contact_background' src={`${botWave}`} alt=""/>
               <div className="Contact_container">
                <div className="Contact_header">Contact</div>
                <div className="Contact_menu">
                    <div className="Contact_menu--item">
                        <FlipCard
                            front={<img src={gmailPNG} alt=""/>}
                            back={
                                <>
                                <a  rel="noreferrer" href='mailto:loivp13@gmail.com'id='email'>Email</a>
                               
                                </>
                            }
                        >
                        </FlipCard>
                        
                        
                    </div>
                    <div className="Contact_menu--item">
                        <FlipCard
                            front={  <img src={gitHubLogoPNG} alt=""/>}
                            back={
                                <>
                                <a  rel="noreferrer"  target='_blank' href='https://github.com/loivp13' >GitHub</a>
                               
                                </>
                            }
                        >
                        </FlipCard>
                      

                    </div>
                    <div className="Contact_menu--item">
                         <FlipCard
                            front={  <img src={linkedInPNG} alt=""/>}
                            back={
                                <>
                                <a  rel="noreferrer" target='_blank' href='https://github.com/loivp13' >LinkedIn</a>
                               
                                </>
                            }
                        >
                        </FlipCard>
                    </div>
                </div>
               </div>

            </div>
        )
    }
}

export default Contact
