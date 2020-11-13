import React, { Component } from 'react'
import Navigation from './Navigation'
import Hero from './Hero'
import AboutMe from './AboutMe'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Resume from './Resume'

import '../styles/css/main.css'

export class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            resumeShow: false,
        }
    }
    toggleResume = () => {
        this.setState({...this.state, resumeShow: !this.state.resumeShow})
    }
    
    
    render() {
        return (
            <div className='App' onScroll={this.determinePxScroll}>
                <Navigation toggleResume={this.toggleResume}></Navigation>
                <Hero></Hero>
                <AboutMe></AboutMe>
                <Portfolio></Portfolio>
                <Contact toggleResume={this.toggleResume}></Contact>
                {this.state.resumeShow ? <Resume pxScrolled={this.state.pxScrolled} toggleResume={this.toggleResume}></Resume> : null}
            </div>
        )
    }
}

export default App
