import React from 'react'
import './Subscribe.css'
import Cards from '../images/curved-bg.jpg'
 const AboutUs = () => {
    return (
        <div style={{marginTop:"-20px"}}>
            <img src={Cards}/>
             <div>
             <div class="title">
            <div class="title-text">
                <h2>Creating for Education Business</h2>
                <h6>Follow us for join our events</h6>
            </div>
            <div class="title-underline"></div>
                </div>
            <div class="container">
                <div  uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
                    <div class="card">
                        <div class="img-box">
                            <img src="https://image.flaticon.com/icons/svg/681/681611.svg" alt="Design" title="Design"/>
                            <h4>
                            CLASSROOM TRAINING
                            </h4>
                        </div>
                        
                        <div class="content">
                            <span>
                            We provide the option of flexible learning and our courses are individually designed to adapt to the distinctive requirements of students, fresh graduates as well as professionals.
                            </span>
                        </div>
                    </div>
                </div>
                <div >
                    <div class="card">
                        <div class="img-box">
                            <img src="https://image.flaticon.com/icons/svg/1197/1197409.svg" alt="Code" title="Code"/>
                            <h4>
                            CAMPUS TRAINING
                            </h4>
                        </div>
                        
                        <div class="content">
                            <span>
                            We provide 100% Job Assurance and Placements along with certified career courses to pinpoint the development of your career.
                            </span>
                        </div>
                    </div>
                </div>
                <div uk-scrollspy="cls: uk-animation-slide-right; repeat: true">
                    <div class="card">
                        <div class="img-box">
                            <img src="https://image.flaticon.com/icons/svg/993/993707.svg" alt="Launch" title="Launch"/>
                            <h4>
                            CORPORATE TRAINING
                            </h4>
                        </div>
                        
                        <div class="content">
                            <span>
                            We are an approved professional training provider for several courses covering the IT domains. Having enrolled with us, you will get end-to-end and complete hand-holding by the connoisseurs that will guide you towards a bright future
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default AboutUs;