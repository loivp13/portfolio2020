import React, { Component } from 'react'
import Slideshow from './Slideshow'
import windowSize from 'react-window-size';


import myFoodieDiarySVG from '../assets/MyFoodieDiary.svg';
import netflixSVG from '../assets/Netflix.svg';
import gameAppSVG from '../assets/GameApp.svg';
import gameDealsSVG from '../assets/GameDeals.svg';

import myFoodieDiaryHeaderPNG from '../assets/MyFoodieDiaryHeader.png';
import myFoodieDiaryDesktop from '../assets/MyfoodieDiaryDesktop.png'
import myFoodieDiaryPhone from '../assets/MyfoodieDiaryPhone.png'
import myFoodieDiaryTab from '../assets/MyfoodieDiaryTab.png'


import netflixHeaderPNG from '../assets/NetflixHeader.png';
import netflixDesktop from '../assets/NetflixDesktop.png'
import netflixPhone from '../assets/NetflixPhone.png'
import netflixTab from '../assets/NetflixTab.png'

import gameDealsHeaderPNG from '../assets/GameDealsHeader.png';
import gameDealsDesktop from '../assets/GameDealsDesktop.png'
import gameDealsPhone from '../assets/GameDealsPhone.png'
import gameDealsTab from '../assets/GameDealsTab.png'

import gameAppHeaderPNG from '../assets/GameAppHeader.png';
import gameAppDesktop from '../assets/GameAppDesktop.png'
import gameAppPhone from '../assets/GameAppPhone.png'
import gameAppTab from '../assets/GameAppTab.png'

import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

export class Carousel extends Component {

    constructor(props){
        super(props);
        this.state = {
        }
    }
    
    renderResponsiveCarousel = (arrImages) => {
        console.log(this.props.windowWidth)
        if(this.props.windowWidth < 600){
            console.log(600)
            return <Slideshow arrImages={arrImages}></Slideshow>
        } else {
            return arrImages[0]
        }
    }

    render() {

        return (
                <div className="Carousel" onScroll={this.props.updateCurrentItemOnScroll}>
                <a target='_blank' href="https://myfoodiediary.dev/">
                    <div className="Carousel--item">
                        <div className="Carousel--item-image">
                            {this.renderResponsiveCarousel(
                                    [
                                        <img className='Carousel--item-image-devices' src={myFoodieDiarySVG} alt="" srcSet=""/>,
                                        <img className='Carousel--item-image-devices' src={myFoodieDiaryDesktop} alt="" srcSet=""/>,
                                        <img className='Carousel--item-image-devices' src={myFoodieDiaryTab} alt="" srcSet=""/>,  
                                        <img className='Carousel--item-image-devices' src={myFoodieDiaryPhone} alt="" srcSet=""/>,
                                        <img className='Carousel--item-image-devices' src={myFoodieDiaryDesktop} alt="" srcSet=""/>,
                                    ]
                                )
                            }
                            <img className='Carousel--item-image-header' src={myFoodieDiaryHeaderPNG} alt="" srcSet=""/>
                        </div>
                    </div>
                </a>
                <a target='_blank' href="https://netflix-react.herokuapp.com/">
                 <div className="Carousel--item">
                        <div className="Carousel--item-image">
                            {this.renderResponsiveCarousel(
                                    [
                                        <img className='Carousel--item-image-devices' src={netflixSVG} alt="" srcSet=""/>,
                                        <img className='Carousel--item-image-devices' src={netflixDesktop} alt="" srcSet=""/>,
                                        <img className='Carousel--item-image-devices' src={netflixTab} alt="" srcSet=""/>,  
                                        <img className='Carousel--item-image-devices' src={netflixPhone} alt="" srcSet=""/>,<img className='Carousel--item-image-devices' src={netflixDesktop} alt="" srcSet=""/>,
                                    ]
                                )
                            }
                            <img className='Carousel--item-image-header' src={netflixHeaderPNG} alt="" srcSet=""/>
                        </div>
                    </div>
                </a>
                <a target='_blank' href="https://gameapp-reactv1.herokuapp.com/">
                 <div className="Carousel--item">
                        <div className="Carousel--item-image">
                        {this.renderResponsiveCarousel(
                                    [
                                        <img className='Carousel--item-image-devices' src={gameAppSVG} alt="" srcSet=""/>,
                                        <img className='Carousel--item-image-devices' src={gameAppDesktop} alt="" srcSet=""/>,
                                        <img className='Carousel--item-image-devices' src={gameAppTab} alt="" srcSet=""/>,  
                                        <img className='Carousel--item-image-devices' src={gameAppPhone} alt="" srcSet=""/>,<img className='Carousel--item-image-devices' src={gameAppDesktop} alt="" srcSet=""/>,
                                    ]
                                )
                            }
                            
                            <img className='Carousel--item-image-header' src={gameDealsHeaderPNG} alt="" srcSet=""/>
                        </div>
                    </div>
                </a>
                <a target='_blank' href="https://gameappv2.herokuapp.com/">
                   <div className="Carousel--item">
                        <div className="Carousel--item-image">
                            {this.renderResponsiveCarousel(
                                    [
                                        <img className='Carousel--item-image-devices' src={gameDealsSVG} alt="" srcSet=""/>,
                                        <img className='Carousel--item-image-devices' src={gameDealsDesktop} alt="" srcSet=""/>,
                                        <img className='Carousel--item-image-devices' src={gameDealsTab} alt="" srcSet=""/>,  
                                        <img className='Carousel--item-image-devices' src={gameDealsPhone} alt="" srcSet=""/>,<img className='Carousel--item-image-devices' src={gameDealsDesktop} alt="" srcSet=""/>,
                                    ]
                                )
                            }
                            <img className='Carousel--item-image-header' src={gameAppHeaderPNG} alt="" srcSet=""/>
                        </div>
                    </div>
                </a>
                    
                   
                   
                 
                </div>
        )
    }
}

export default windowSize(Carousel)
