import React, { Component } from 'react'

export class Slideshow extends Component {


    renderItems = () => {
       let newArr = this.props.arrImages.slice(1)
       return newArr.map((e) => {
           return <div className="Slideshow_item">
            {e}
           </div>
       }
       )
    }

    render() {
        return (
            <div className='Slideshow'>
                {this.renderItems()}
            </div>
        )
    }
}

export default Slideshow
