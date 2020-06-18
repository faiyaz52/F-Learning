import React from 'react'
import './Subscribe.css'
import {Link} from 'react-router-dom'
const Subscribe = () =>{
 return (
     <div>  
            <footer class="footer">
                <div class="footer-left col-md-4 col-sm-6">
                    <p class="about">
                    <span style={{fontSize:"17px"}}> About the company</span>Eppeok Institute of Technology is a leading IT training provider. We offer a wide range of the latest software courses in Kolkata. Eppeok offers hands-on interactive and practical sessions, along with real-time live projects on various trending professional training courses..
                    </p>
                </div>
                <div class="footer-center col-md-4 col-sm-6">
                    <div>
                        <i class="fa fa-map-marker"></i>
                        <i class="material-icons md-18 mr-2" style={{color:"#00c7ff",marginLeft:"-13px"}}>location_on</i> <span style={{color:"#00c7ff"}}> Address</span> <p style={{color:"white"}}> E2/3, Block EP and GP, Stesalit Towers, 3rd Floor, Room No. 305, Near Webel Bhavan, Kolkata, West Bengal 700091</p>
                    </div>
                    <div>
                        <i class="fa fa-phone "></i>
                        <i class="material-icons md-18 mr-2" style={{color:"#00c7ff",marginLeft:"-13px"}}>phone</i><span style={{color:"#00c7ff"}}> Mobile :</span> <a href="#"style={{color:"white"}}>+91 33 4001-0207</a>
                    </div>
                    <div>
                        <i class="material-icons md-18 mr-2" style={{color:"#00c7ff"}}>email</i><span style={{color:"#00c7ff"}}> Email : </span><p ><a href="#" style={{color:"white"}}>info@eppeok.guru</a></p>
                    </div>
                </div>
                    <div class="footer-right col-md-4 col-sm-6">
                        <h2 style={{color:"#00c7ff"}}> Company</h2>
                        <p class="menu">
                        <Link to="/"> Home</Link> |
                        <Link to="/About"> About</Link> |
                        <Link to="/Service"> Services</Link>|
                        <Link to="/Contact"> Contact</Link>
                        </p>
                    </div>
                    </footer>
   
 </div>

     
 )
}

export default Subscribe;