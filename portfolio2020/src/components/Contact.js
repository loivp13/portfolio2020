import React, { Component } from 'react'

import botWave from '../assets/BotWave.png'
import gmailPNG from '../assets/googleMail.png'
import gitHubLogoPNG from '../assets/gitHubLogo.png'
import linkedInPNG from '../assets/LinkedIn.png'
import clipBoardSVG from '../assets/clipboardSVG.svg'
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
                                <a href='mailto:loivp13@gmail.com'id='email' onClick={this.props.toggleResume} >loivp13@gmail.com</a>
                               
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
                                <a href='https://github.com/loivp13' >github.com/loivp13</a>
                               
                                </>
                            }
                        >
                        </FlipCard>
                      

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
