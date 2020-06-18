import React, { Component } from 'react'
import oyo from '../images/oyo.png'
import holiday from '../images/holidayaces.png'
import travel from '../images/travel.png'
import Checkin from '../images/checkin_vacation.jpeg'
import Easemy from '../images/Easemy.jpg'
import via from '../images/via.png'
class Project extends Component {
    render() {
        return (
            <div>
                <section id="projects">
                    <div class="title"> 
                    <h2>Our Clients</h2>                     
                        <div class="title-underline"></div>
                    </div>
                    <div class="projects-container" uk-grid uk-scrollspy="cls: uk-animation-slide-bottom; target: .uk-card; delay: 300; repeat: true">
                        <article class="projects-item"  uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
                            <img src={oyo} style={{width:"100%",height:"50px"}} />      
                            
                        </article>
                        <article class="projects-item uk-card uk-card-default uk-card-body">
                        <img src={travel} style={{width:"100%",height:"30px"}} />       
                            
                        </article>

                        <article class="projects-item uk-card uk-card-default uk-card-body" uk-scrollspy-class="uk-animation-slide-top">
                            <img src={Checkin} style={{width:"100%",height:"50px"}} />
                            <div class="img-text">
                                                           
                            </div>
                        </article>
                        <article class="projects-item" uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
                            <img src={holiday} style={{width:"100%",height:"0px"}} />
                            <div class="img-text">
                                                           
                            </div>
                        </article>
                        <article class="projects-item uk-card uk-card-default " uk-scrollspy-class="uk-animation-slide-top">
                            <img src={via} style={{width:"100%",height:"0px"}} />
                            <div class="img-text">
                                                           
                            </div>
                        </article>
                        <article class="projects-item"  uk-scrollspy="cls: uk-animation-slide-right; repeat: true">
                            <img src={Easemy} style={{width:"100%",height:"0px"}} />
                            <div class="img-text">
                                                           
                            </div>
                        </article>
                    </div>
                </section> 
             </div>
        )
    }
}
export default Project;