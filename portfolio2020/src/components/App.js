import React, { Component } from 'react'
import Navigation from './Navigation'
import Hero from './Hero'
import AboutMe from './AboutMe'
import Portfolio from './Portfolio'
import Contact from './Contact'

import '../styles/css/main.css'

export class App extends Component {
    render() {
        return (
            <div className='App'>
                <Navigation></Navigation>
                <Hero></Hero>
                <AboutMe></AboutMe>
                <Portfolio></Portfolio>
                <Contact></Contact>
            </div>
        )
    }
}

export default App
