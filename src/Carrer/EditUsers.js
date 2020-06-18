import React,{useState,useEffect} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import Axios from 'axios';
 const EditUsers = () => {
     let history =useHistory();
     const {id}=useParams();
     console.log(id)
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
    useEffect (()=>{
        loadUser()
        console.log(loadUser.data)
    },[])
    const onSubmit = async e =>{
        e.preventDefault();
        await Axios.put(`http://localhost:3003/users/${id}`,user);
        history.push("/Admin");
    }
    const loadUser = async () => { 
        const result = await Axios.get(`http://localhost:3003/users/${id}`)
        console.log(result);
        setUser(result.data)
    };
    return (
        <div className=" uk-card-default uk-card-body uk-width-1-2@m container edituser "  style={{marginTop:"210px",width:"500px"}}>  
        
        <form onSubmit={e => onSubmit(e)} style={{marginLeft:"80px",width:"500px"}}>
        <h2 style={{marginLeft:"-90px",marginBottom:"40px",marginTop:"-10px"}}>Edit users</h2>
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
            <button style={{marginLeft:"87px",marginTop:"40px",width:"110px",height:"35px",fontSize:"13px",borderRadius:"20px"}}>Update user</button>
    </form>
</div>
    )
}
export default EditUsers;