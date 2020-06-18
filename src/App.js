import React, { Component } from 'react';
import  './App.css'
import Service from './Contain/Service';
import  AboutUs  from './Contain/AboutUs';
import { Gallery } from './Contain/Gallery';
import Contact from './Contain/Contact';
class App extends Component{
    render(){
        return(
           <div>
                <AboutUs/>
                <Service/>
                <Gallery/>
                <Contact/>
           </div>
        );
    }
}

export default App;
