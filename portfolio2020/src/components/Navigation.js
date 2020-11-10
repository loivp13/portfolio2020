import React, { Component } from 'react'

//import from npm
import Sticky from 'react-stickynode';
//Images
import logo from '../assets/PortfolioLogo.svg'
import menuListIcon from '../assets/MenuIcon.png'
import menuListCloseIcon from '../assets/MenuClose.png'

export class Navigation extends Component {

    constructor(props){
        super(props)
        this.state = {
            open:true,
            sticky: false,
            firstRenderDone: false //used to stop disappearing animation on first render
        }
    }

    // handleClick = () => {
    //     this.state.open ? this.setState({...this.state, open: false}): this.setState({...this.state, open: true});
    // }

    handleStickyStateChange = (status) => {
        if(status.status === Sticky.STATUS_ORIGINAL){
            this.setState({...this.state, sticky: false})
        } else {
            this.setState({...this.state, sticky:true, firstRenderDone: true})
        }
    }

    // renderMenuButtons = () => {
    //     if(this.state.open){
    //         return<img onClick={this.handleClick} className='Navigation_menuCloseIcon' src={menuListCloseIcon} alt=""/>
    //     } else{
    //         return<img onClick={this.handleClick} className='Navigation_menuIcon' src={menuListIcon} alt=""/>
    //     }
    // }
    // !this.state.sticky && !this.firstRenderDone

    createNavigationClass = () => {
        let NaviClass = `Navigation`
        console.log(this.state)
        if(this.state.sticky === false && this.state.firstRenderDone === true){
            return NaviClass + ` d_hidden`
        } else if (this.state.sticky === true && this.state.firstRenderDone === true ){
            return NaviClass
        } else {
            return NaviClass  + ` d_none`
        }
    }
    

    render() {
        return (
            <Sticky onStateChange={this.handleStickyStateChange} innerZ={35} activeClass={'Sticky_show'} innerClass={'Sticky_inner'}>
                <div className={this.createNavigationClass()}>
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
            </Sticky>
        )
    }
}

export default Navigation
