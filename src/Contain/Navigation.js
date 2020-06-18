import React from 'react'
import './Navigation.css'
import { Link } from "react-router-dom";
import Logo from '../images/tatkal_red_cab.png'
import Header from './Header';
const Navigation = () =>{
 return (
     <div className="row" style={{marginLeft:"auto"}}>
         
         <div class="nav-wrapper nav-wrapper-4">
                <nav class="effect-4">
               
                    <ul>
                        <li>
                            <img src={"https://eppeok.guru/wp-content/themes/guru/images/logo.png"} className="logo"/>
                        </li>
                        <li><Link to="">Home</Link></li>
                        <li><Link to="">About </Link></li>
                        <li><Link to="Service">Course</Link></li>
                        <li><Link to="Gallery">Gallery</Link></li>
                        <li><Link to="Contact">Contact</Link></li>
                        <li><Link to="Adminlogin">Admin</Link></li>
                        <li><Link to="Career">Carrer</Link></li>
                    </ul>
                </nav>
                </div> 
     </div>    
    
 )
}

export default Navigation;