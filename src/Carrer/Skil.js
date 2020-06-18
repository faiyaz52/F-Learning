import React from 'react'
import { ExpansionPanel } from 'react-md';
import { Registration } from './Registration';
export const Skil = () => {
    return (
        <div>
           <div class="uk-width-1-2@s uk-width-2-5@m">
            <ul class="uk-nav-default uk-nav-parent-icon " uk-nav="multiple: true" style={{width:"600px",height:"500px"}}>               
                <li class="uk-parent uk-card uk-card-default uk-card-body mb-4" style={{width:"500px",marginLeft:"130px"}} >
                    <a href="#" style={{fontSize:"23px",height:"68px"}}>Front-End</a>
                    <ul class="uk-nav-sub">
                        <li class="List">HTML5</li>
                        <li class="List">CSS and SCSS</li>
                        <li class="List">JavaScript</li>
                        <li class="List">Angular</li>
                        <li class="List">TypeScript</li>
                        <li class="List">Android</li>
                    </ul>
                   
                </li>
                <li class="uk-parent uk-card uk-card-default uk-card-body" style={{width:"500px",marginLeft:"130px"}}>
                    <a href="#" style={{fontSize:"23px",height:"68px"}}>Back-End</a>
                    <ul class="uk-nav-sub">
                    <li class="List">Node.js</li>
                    <li class="List">Elastic search and kibana</li>
                    <li class="List">Kafka</li>
                    <li class="List">Mongo DB</li>
                    <li class="List">MicroServices Architures</li>
                    <li class="List">google Cloud Platform</li>
                    </ul>
                </li>
            </ul>
        </div>    
        </div>
    )
}
