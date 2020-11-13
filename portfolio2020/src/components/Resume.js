import React, { Component } from 'react'
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export class Resume extends Component {

    constructor(props){
        super(props);
        this.state = {
            pxScrolled :385

        }
    }
    determinePxScroll = (e) => {
        this.setState({...this.state, pxScrolled: e.target.scrollingElement.scrollTop+100})
    }

    
    changeTargetToBlank(){
        let allATags = [...document.getElementsByTagName('a')]
        
        allATags.forEach(element => {
            console.log(element)
            element.setAttribute('target', '_blank')
        });
    }
    componentWillMount(){
        window.addEventListener('scroll', (this.determinePxScroll))

        let HTMLscrollTop = document.getElementsByTagName('html')[0].scrollTop
        this.setState({...this.state, pxScrolled: HTMLscrollTop +100})
    }
    componentWillUnmount(){
        this.setState({...this.state, pxScrolled:0})
        window.removeEventListener('scroll',this.determinePxScroll)
    }
    
    render() {
        return (
            <div onClick={this.props.toggleResume} className="Resume_container" style={{paddingTop: `${this.state.pxScrolled }px`}}>

               <Document className='Resume'
               file='Loi-Pham_Resume11-20.pdf'
               >
                   <Page onGetAnnotationsSuccess={this.changeTargetToBlank}  width={650}  className='Resume_page' pageNumber={1}></Page>
               </Document>
               </div>
        )
    }
}

export default Resume
