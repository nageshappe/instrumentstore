import React, { Component } from "react";
// import 'C:/Users/shashank/Desktop/finalhome/mainhome/node_modules/bootstrap/dist/css/bootstrap.min.css'
import GuestNavbar from './GuestNavbar';
import './LoginComponent.css'
import LoginService from "../services/LoginService";

export default class Login extends Component {

 
    constructor(props){
        super(props)
            this.state={
               
                email:'',
                password:'',
         
               
        }

        this.checkUser=this.checkUser.bind(this);

      
    }

    checkUser=(e)=>{
        e.preventDefault();

        let check={email:this.state.email, password:this.state.password};
        let userid=''
        LoginService.checkUser(check).then((res)=>{

            let result=res.data;
             console.log(result)  
            if(result==true)
            {
                
                if(check.email=='admin'&&check.password=='admin')
                {console.log("admin")

                    localStorage.setItem('userid','admin');
                    localStorage.setItem('admin','1');
                    this.props.history.push('./admin');
                }
                
                else
                {
                LoginService.getUserId(check.email).then((res)=>{
                    
                    let dat=res.data;

                  localStorage.setItem('userid',dat);
                  console.log(localStorage.getItem('userid')); 
                   this.props.history.push('./home');
                });
            }

            }

            
        })
       
    
    }

    changeEmailId=(event)=>{
        this.setState({email:event.target.value});
    }

    changePassword=(event)=>{
        this.setState({password:event.target.value});
    }
    
    render() {
        return (
            <div>
                <GuestNavbar />
            
            <div class="auth-wrapper" id="loginBox">
                
                <div  class="auth-inner">
                            <form onSubmit={()=>this.login()}>
                                <h3>Sign In</h3>

                                <div className="form-group" >
                                    <label>Email address</label>
                                    <input id="email" type="email" className="form-control" placeholder="Enter email"
                                    value={this.state.email} onChange={this.changeEmailId} />
                                    
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input id="password" type="password" className="form-control" placeholder="Enter password" 
                                     value={this.state.password} onChange={this.changePassword}/>
                                </div>

                              
                                

                                <button id="submitButton" type="submit" className="btn btn-primary btn-block" onClick={this.checkUser} >Submit</button>
                            
                            </form>
                            <br></br>
                                <div class="text-center" >
                                <a href="/signup" id="signupLink" >New user? click here</a>
                        </div>
                </div>
            </div>
            </div>
        );
    }
}