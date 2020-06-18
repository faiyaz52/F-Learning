import React from 'react'
import './Gallery.scss'
import oyo from '../images/oyo.png'
import holiday from '../images/holidayaces.png'
import travel from '../images/travel.png'
import Checkin from '../images/checkin_vacation.jpeg'
export const Gallery = () => {
    return (
        <div>
        <section id="projects">
            <div class="title"> 
            <h2>Our Gallery</h2>                     
                <div class="title-underline"></div>
            </div>    
            <div class="row">
            <div class="col-sm-4" >
                 <article class="projects-item"  style={{width:"300px",height:"200px",marginLeft:"50px"}}  uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
                    <img src={'https://eppeok.guru/wp-content/uploads/2019/11/events7.jpg'} style={{width:"100%",height:"50px"}} />      
                    
                </article>
            </div>
            <div class="col-sm-4" >
                 <article class="projects-item"  style={{width:"300px",height:"200px",marginLeft:"50px"}}  uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
                    <img src={'https://eppeok.guru/wp-content/uploads/2019/12/digital_marketing.jpg'} style={{width:"100%",height:"50px"}} />      
                    
                </article>
            </div>
            <div class="col-sm-4" >
                 <article class="projects-item"  style={{width:"300px",height:"200px",marginLeft:"50px"}}  uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
                    <img src={'https://eppeok.guru/wp-content/uploads/2019/12/HTML-Trainng.jpg'} style={{width:"100%",height:"50px"}} />      
                    
                </article>
            </div>
        </div>
        <div class="row">
        <div class="col-sm-4" >
                 <article class="projects-item"  style={{width:"300px",height:"200px",marginLeft:"50px"}}  uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
                    <img src={'https://eppeok.guru/wp-content/uploads/2019/12/Digital-Marketing.jpg'} style={{width:"100%",height:"50px"}} />      
                    
                </article>
            </div>
            <div class="col-sm-4" >
                 <article class="projects-item"  style={{width:"300px",height:"200px",marginLeft:"50px"}}  uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
                    <img src={'https://eppeok.guru/wp-content/uploads/2019/12/HTML-Training.jpg'} style={{width:"100%",height:"50px"}} />      
                    
                </article>
            </div>
            <div class="col-sm-4" >
                 <article class="projects-item"  style={{width:"300px",height:"200px",marginLeft:"50px"}}  uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
                 <img src={'https://eppeok.guru/wp-content/uploads/2019/11/events7.jpg'} style={{width:"100%",height:"50px"}} />      
                    
                </article>
            </div>
        </div>
        </section> 

      
     </div>
    )
}
