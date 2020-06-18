import React,{useState} from 'react'
import Axios from 'axios';
import {useHistory, useParams} from 'react-router-dom'
export const Registration = () => {
    let history =useHistory();
    const [user,setUser]=useState({
        name:"",
        email:"",
        position:"",
        mobile:"",
        city:"",
    })
    const {name,email,position,mobile,city}=user;
    const onInputChange =e=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    const onSubmit = async e =>{
        e.preventDefault();
        await Axios.post("http://localhost:3003/users",user);
        history.push("/");

    }
    return (
        <div className=" uk-card-default uk-card-body uk-width-1-2@m " style={{width:"100%",marginLeft:"-130px"}}>  
        <h2 style={{textAlign:"center",marginBottom:"40px",marginTop:"-20px"}}>Apply for this Position</h2>
        <form onSubmit={e => onSubmit(e)} style={{marginLeft:"80px",marginLeft:"40px"}}>
            <div className="uk-margin">
                <div className="uk-inline">
                    < span class="uk-form-icon" uk-icon="icon: user"></span>
                        <input className="uk-input" type="text"
                        required
                        style={{width:"300px"}}
                        placeholder="Enter the Name"
                        name="name" 
                        value={name}
                        onChange={e => onInputChange(e)}
                    />
                </div>
            </div>
            <div className="uk-inline">
                < span class="uk-form-icon" uk-icon="icon: mail"></span>
                <input className="uk-input" type="text"
                    style={{width:"300px"}}
                    required
                    placeholder="Enter the Emai id" 
                    name="email"
                   value={email}
                   onChange={e => onInputChange(e)}
                />
            </div>
            <div className="uk-margin">
                <div class="uk-inline">
                    < span class="uk-form-icon" uk-icon="icon: phone"></span>
                    <input className="uk-input" type="text" 
                        style={{width:"300px"}}
                        required
                        placeholder="Enter the Mobile"
                        name="mobile"
                        value={mobile}
                        onChange={e => onInputChange(e)}
                    />
                </div>
            </div>
            <div class="uk-margin">
                <div class="uk-form-controls ">
                    <select class="uk-select" id="form-horizontal-select" onChange={e => onInputChange(e)} value={position} name="position"  style={{width:"300px"}}>
                    <option>Select position</option>
                        <option>Front-End</option>
                        <option>Back-End</option>
                    </select>
                </div>
                </div>
            <div className="uk-margin">
                <div class="uk-inline">
                <span class="uk-form-icon" uk-icon="icon: location"></span>
                    <input className="uk-input" type="text" 
                        style={{width:"300px"}}
                        required
                        placeholder="Enter the City"
                        name="city"
                        value={city}
                        onChange={e => onInputChange(e)}
                    />
                </div>
            </div>                          
            <button style={{marginLeft:"87px",marginTop:"40px",width:"110px",height:"35px",fontSize:"13px",borderRadius:"20px"}}>Submit</button>
    </form>
</div>
    )
}
