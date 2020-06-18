import React from 'react'
import Customer from '../images/Layer11.png'
import DataAnalytics from '../images/Layer12.png'
import CoComm from '../images/Layer14.png'
import Digital from '../images/Layer13.png'
import Omni from '../images/Layer16.png'
const Service = () =>{
 return (
        <div className="">
        <section id="services">    
            <div class="title"> 
            <h2>Popular Courses</h2>
            <h6 style={{textAlign:"center"}}>All the top courses we offered</h6>                     
                <div class="title-underline"></div>
            </div>
        <div class="services-container">
            <article class="service-item service-item-white">
                <div class="front-text" >
                    <img src={DataAnalytics} style={{backgroundColor:"#00c7ff",borderRadius:"40px",width:"60px",height:"60px",marginBottom:"20px"}}/>
                    <h4 style={{textAlign:"center",fontSize:"28px"}}>Full stack Development</h4>
                </div>

                <div class="back-text" style={{marginLeft:"40px"}}>
                    <h4 style={{textAlign:"center",fontSize:"28px"}}>Full stack Development</h4>
                    <p style={{textAlign:"center"}}>Full stack Development includes Frontend &amp; Backend Part of the development. In Eppeok Institute of technology we offer students to get t...</p>
                </div>
            </article>
            <article class="service-item service-item-black">
                <div class="front-text" >
                <img src={CoComm} style={{backgroundColor:"#00c7ff",borderRadius:"40px",width:"60px",height:"60px",marginBottom:"20px"}}/>
                <h4 style={{textAlign:"center",fontSize:"28px"}}>Android Training</h4>
                </div>

                <div class="back-text" style={{marginLeft:"40px"}}>
                <h4 style={{textAlign:"center",fontSize:"28px"}}>Android Training</h4>
                    <p ><strong>Android</strong> is based on the Linux V2.6 Kernel with Java programming interface operating environment. And Google Inc. Launches this mobile device...</p>
                </div>
            </article>
            <article class="service-item service-item-white">
                <div class="front-text">
                  <img src={Omni}  style={{backgroundColor:"#00c7ff",borderRadius:"40px",width:"60px",height:"60px",marginBottom:"20px"}}/>
                    <h4 style={{textAlign:"center",fontSize:"28px"}}>Python</h4>
                </div>
                <div class="back-text" style={{marginLeft:"40px"}}>
                    <h4 style={{textAlign:"center",fontSize:"28px"}}>Python</h4>
                    <p> <strong>Python</strong> is a demanding programming language and can be used for software development, system scripting, web development. It ...</p>
                </div>
            </article>     
            <article class="service-item service-item-black">
                <div class="front-text">
                    <img src ={Digital} style={{backgroundColor:"#00c7ff",borderRadius:"40px",width:"60px",height:"60px",marginBottom:"20px"}}/>
                    <h4 style={{textAlign:"center",fontSize:"28px"}}>Digital Marketing</h4>
                </div>

                <div class="back-text" style={{marginLeft:"40px"}}>
                    <h4 style={{textAlign:"center",fontSize:"28px"}}>Digital Marketing</h4>
                    <p>In simplistic terms, Digital Marketing is the promotion of products or brands via one or more forms of electronic media. Digital marketing d...</p>
                </div>
            </article>
        </div>
    </section>
        </div>  
 )
}

export default Service;