import React, { Component } from 'react'
import logo from '../assets/PortfolioLogo.png'
import menuListIcon from '../assets/MenuIcon.png'
import menuListCloseIcon from '../assets/MenuClose.png'

export class Navigation extends Component {

    constructor(props){
        super(props)
        this.state = {
            open:true
        }
    }
    handleClick = () => {
        this.state.open ? this.setState(false): this.setState(true);
    }

    renderMenuButtons = () => {
        if(this.state.open){
            return<img onClick={this.handleClick} className='Navigation_menuCloseIcon' src={menuListCloseIcon} alt=""/>
        } else{
            return<img onClick={this.handleClick} className='Navigation_menuIcon' src={menuListIcon} alt=""/>
        }
    }
    

    render() {
        return (
            <div className='Navigation'>
                {this.renderMenuButtons()}
                <div className="Navigation_logo">
                    <img src={logo} alt="Loi Van Pham/Front End Engineer"/>
                </div>
                <div className="Navigation_menu">
                    <div className="Navigation_menu-item">About Me</div>
                    <div className="Navigation_menu-item">Portfolio</div>
                    <div className="Navigation_menu-item">Contact</div>
                    <div className="Navigation_menu-item">Resume</div>
                </div>
            </div>
        )
    }
}

export default Navigation
