import React,{useState,useEffect} from 'react'
import {Link,useParams} from 'react-router-dom'
import Axios from 'axios'
export const ViewUser = () => {
    const [user,setUser]=useState({
        name:"",
        email:"",
        position:"",
        mobile:"",
        city:"",
    })
    useEffect(() =>{
        loadUser()
    },[])
const {id}= useParams();
const loadUser = async () => { 
    const result = await Axios.get(`http://localhost:3003/users/${id}`)
    console.log(result);
    setUser(result.data)
};
    return (
       <div className="container">
             
           <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m container" style={{marginTop:"130px",borderRadius:"30px",width:"600px"}}>  
          
           <form>
           <h3 className="views">User View</h3>
            <h3 style={{textAlign:"center",fontSize:"22px"}}>{user.name}</h3>
           
            <div className="row" style={{marginLeft:"30px",marginTop:"20px"}}>
                <div className="col-sm-6" > 
                    <div className="uk-inline">
                        <h6><strong>{user.mobile}</strong> </h6>
                    </div>
                </div>            
                <div className="col-sm-6">         
                    <div className="uk-inline">
                    <h6><strong>{user.email}</strong></h6>                       
                    </div>            
                </div>
            </div>        
            <div className="row" style={{marginLeft:"30px"}}>
                <div className="col-sm-6" > 
                    <div className="uk-margin">
                    <h6><strong>{user.position}</strong></h6>
                    </div>
                </div>
                <div className="col-sm-6" > 
                     <div class="uk-margin">
                     <h6><strong>{user.city}</strong></h6>
                    </div>
                </div>  
            </div>
            <Link to="/Admin" ><button style={{marginLeft:"110px",marginTop:"40px",borderRadius:"20px"}} >Go to Back</button>       
            </Link>
            </form>
        </div>
        
           </div>
    )
}
