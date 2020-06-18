import React from 'react'
import Index from './Index'
import { Skil } from './Skil'
import { Registration } from './Registration'

import Hello from '../Pages/Hello'
 const Page = () => {
    return (
        <div>  
            <div className="" style={{marginTop:"100px"}}>
                <div class="row">
                 
                    <div class="col-sm-12">
                        <Index/>
                    </div>
                  
                </div>
            </div>
            <div className="container" style={{marginTop:"100px"}}>
                <div class="row">
                        <div class="col-sm-2">
                            </div>
                      <div class="col-sm-6">
                           <Registration/>
                        </div>
                    <div class="col-sm-4">
                       <Skil/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Page