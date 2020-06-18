import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom'
import Axios from 'axios';
import Avatar from 'react-avatar';

 const UserTable = () => {
     const [Users,setUsers]=useState([]);
     
     useEffect(() => {
       loadusers();
     }, []);
   const loadusers = async() =>{
       const getData= await Axios.get('http://localhost:3003/users')
       setUsers(getData.data.reverse());
   }
   const deleteUser = async id =>{
       await Axios.delete(`http://localhost:3003/users/${id}`)
       loadusers();
   }
    return (
        <div className="container" style={{marginTop:"130px"}}>
            <table class="table border shadow ">
    <thead >
      <tr>
        <th>Firstname</th>
        <th>Email</th>
        <th>Position</th>
        <th>Mobile</th>
        <th>City</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {
            Users.map((user,index) =>(
                <tr >
                    <td><Avatar name={user.name} size="30px" round="25px" className="mr-3"/>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.position}</td>
                    <td>{user.mobile}</td>    
                    <td>{user.city}</td>
                    <td className="action">
                        <Link to ={`EditUsers/${user.id}`}>
                        <i class="material-icons md-18 mr-2" style={{color:"#00c7ff"}}>edit</i>
                        </Link>
                        <Link to ={`ViewUser/${user.id}`}>
                        <i class="material-icons md-18 mr-2" style={{color:"#00c7ff"}}>remove_red_eye</i>
                        </Link>
                        <Link>
                        <i class="material-icons md-18 text-danger mr-2" onClick={()=>deleteUser(user.id)}>delete</i>
                        </Link>
                     
                    </td>
                </tr>
            ))
        }
    </tbody>
  </table>
        </div>
    )
}
export default UserTable;
