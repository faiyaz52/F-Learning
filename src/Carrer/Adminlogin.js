import React,{useState} from 'react'
import './Adminlogin.css'
import {useHistory,Link} from 'react-router-dom';
class Adminlogin extends React.Component{
  constructor(props) {
      super(props);
      this.state = { 
          username: '',
          password: '',
          usernameError:'',
          passswordError:'',
      };
    }
    mySubmitHandler = (event) => {
      event.preventDefault();
      this.setState({ username: '',password: ''});
      if(this.valid());
    }
    valid(){
      const user=this.state.username;
      const pass=this.state.password;
       if(user=='nikita@gmail.com' && pass=='nikita123'){
          this.props.history.push('/user-details');
       }
       else{
          this.setState({usernameError:"Please enter your email id",passswordError:"Please  enter your Password"});
       }
    }
    myChangeHandler = (event) => {
      this.setState({username: event.target.value});
    }
    myPassword = (event) => {
      this.setState({password: event.target.value});
    }
    render() {
      return (
              <div style={{marginTop:"140px"}}>
                 <div className="login_box uk-card-default uk-card-body uk-width-1-2@m container" style={{borderRadius:"20px"}}>
                  <div className="part_img" style={{borderRadius:"20px"}}>
                    <h2 style={{color:"white",textAlign:"center",marginTop:"120px",fontSize:"30px"}}>Welcome</h2>
                    <h2 style={{color:"white",textAlign:"center",marginTop:"10px",fontSize:"16px"}}>Eppeok Institude of technology</h2>
                  </div>
                  <div className="part_field">
                    <content_login id='content_in'>
                    <img src={"https://eppeok.guru/wp-content/themes/guru/images/logo.png"} style={{width:"95px",marginTop:"-45px",marginLeft:"170px",marginBottom:"50px"}}/><span></span>
                      <form onSubmit={this.mySubmitHandler}>
                        <input
                          type='text'
                          placeholder='Email Id'
                          onChange={this.myChangeHandler}
                        />
                        <span style={{color:"red",fontSize:"13px",marginLeft:"90px"}}>{this.state.usernameError}</span>
                        <input
                            type='password'
                            placeholder='Password'
                            onChange={this.myPassword}
                        />
                        <span style={{color:"red",fontSize:"13px",marginLeft:"90px"}}>{this.state.passswordError}</span>
                        <button style={{marginLeft:"160px",marginTop:"40px",borderRadius:"20px"}} >Sign in</button>
                      </form>
                    </content_login>
                  </div>
                </div>
              </div>
            );
          }
        }
export default Adminlogin;