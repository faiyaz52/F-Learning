import React, { Component } from 'react';
import {BrowserRouter as Router , Route,Switch} from 'react-router-dom';
import Navigation from './Contain/Navigation';
import App from './App';
import Page from './Carrer/Page';
import UserTable from './Pages/UserTable';
import  EditUsers  from './Carrer/EditUsers';
import { ViewUser } from './Carrer/ViewUser';
import Adminlogin from './Carrer/Adminlogin';
import Service from './Contain/Service';
import { Gallery } from './Contain/Gallery';
import Contact from './Contain/Contact';
class Home extends Component{
    render(){
        return(
          <div>
            <Router >
                <div className="">                 
                 <Navigation/>
                 <Switch>
                   <Route exact path="/"component={App}/>
                    <Route exact path="/Career"component={Page}/> 
                    <Route exact path="/Admin"component={UserTable}/>
                    <Route exact path="/EditUsers/:id"component={EditUsers}/>
                    <Route exact path="/ViewUser/:id"component={ViewUser}/>
                    <Route exact path="/Adminlogin"component={Adminlogin}/>
                    <Route exact path="/Gallery"component={Gallery}/>
                    <Route exact path="/Service"component={Service}/>
                    <Route exact path="/Contact"component={Contact}/>
                    <Route exact path="/user-details"component={UserTable}/>
                  </Switch>               
                </div>
            </Router>
          </div>
        );
    }
}

export default Home;
