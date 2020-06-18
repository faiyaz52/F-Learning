import React from 'react'
import './index.css';
import WEBDEVELOPE from '../images/WEBDEVELOPE.jpg'
import Front from '../images/blockchain-d.jpg'
import FrnotImage from '../images/frontImage.jpg'
 const Career = () => {
  return (
            <div style={{marginTop:"",marginLeft:"290px",width:"700px"}}> 
                  <div class="title" style={{marginTop:"20px",marginBottom:"60px"}}> 
                        <h2>Career</h2>                     
                        <div class="title-underline"></div>
                    </div>
                    <div id="myCarousel" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                        <div class="item active">
                            <img src={WEBDEVELOPE}  style={{width:"800px",height:"300px"}}/>
                            <div class="carousel-caption">
                            </div>
                        </div>
                        <div class="item">
                        <img src={Front} style={{width:"800px",height:"300px"}}/>
                            <div class="carousel-caption">
                            <h2>We hiring for Intership</h2>
                            <h2>Tatkal cabs</h2>
                            <p></p>
                            </div>
                        </div>
                        <div class="item">
                        <img src={FrnotImage}style={{width:"800px",height:"300px"}}/>
                            <div class="carousel-caption">
                            <h2>Front-End and Back-End</h2>
                            <h2>TAngular and Node js</h2>
                            </div>
                        </div>
                        </div>
                        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span class="glyphicon glyphicon-chevron-left"></span>
                        <span class="sr-only">Previous</span>
                        </a>
                        <a class="right carousel-control" href="#myCarousel" data-slide="next">
                        <span class="glyphicon glyphicon-chevron-right"></span>
                        <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
          
        )
    }
export default Career;