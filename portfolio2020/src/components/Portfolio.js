import React, { Component } from 'react'

import TimeScale from './TimeScale'
import Carousel from './Carousel'


import midWave from '../assets/midWave.png'


export class Portfolio extends Component {
     constructor(props){
        super(props);
        this.state = {
            currentItem: 0,
            projectDates: [['Oct.','Jul'],['Dec.','Jul.'],['Jul.','Apr.'],['Feb.','Dec.']]
        }
    }

    componentDidUpdate(){
    }

    updateCurrentItemOnScroll = (e) => {
      let carouselHeight = e.target.scrollHeight
      let carouselItemHeight =  carouselHeight/4; 
      let scrollTop = e.target.scrollTop;

      if(scrollTop < carouselItemHeight) {
          this.setState({...this.state,currentItem: 0})
      } else if(scrollTop < 2 * carouselItemHeight){
          this.setState({...this.state,currentItem: 1})
      
      } else if(scrollTop < 3 * carouselItemHeight){
          this.setState({...this.state,currentItem: 2})
      } else {
          this.setState({...this.state, currentItem: 3})
      }

    }
    
 
    render() {
        return (
            <div id='portfolio' className='Portfolio' >
                <img className='Portfolio_background' src={midWave} alt=""/>
                <div className="Portfolio_container">
                    <div className="Portfolio_header">
                        Portfolio
                    </div>
                    <div className="Portfolio_main">
                        <div className="Portfolio_main--left">
                            <TimeScale currentItem={this.state.currentItem} projectDates={this.state.projectDates[this.state.currentItem]}></TimeScale>
                        </div>
                        <div className="Portfolio_main--right">
                            <Carousel updateCurrentItemOnScroll={this.updateCurrentItemOnScroll}></Carousel>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio
