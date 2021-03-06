import React, { Component } from "react";
// import 'C:/Users/shashank/Desktop/finalhome/mainhome/node_modules/bootstrap/dist/css/bootstrap.min.css'
import GuestNavbar from './GuestNavbar'
import './LoginComponent.css'
import LoginService from "../services/LoginService";
import SignupService from "../services/SignupService";

export default class SignUp extends Component {

    constructor(props){
        super(props)

        this.state={

            email:'',
            password:'',
            username:'',
            mobileNumber: ''

        }

        this.changeEmailId=this.changeEmailId.bind(this);
        this.changeUsername=this.changeUsername.bind(this);
        this.changeMobileNumber=this.changeMobileNumber.bind(this);
        this.changePassword=this.changePassword.bind(this);
        this.changeConfirmPassword=this.changeConfirmPassword.bind(this);
    }

    signUpUser=(e)=>{
        e.preventDefault();

        let register={email:this.state.email, password:this.state.password,username:this.state.username,mobileNumber:this.state.mobileNumber,confirmPassword:this.state.confirmPassword};

        console.log('details = '+JSON.stringify(register));

        if(register.password==register.confirmPassword)
        {
            let check={email:this.state.email,password:this.state.password};

            LoginService.checkUser(check).then((res)=>{

                let result=res.data;

                if(result==true)
                {

                }
                else
                {
                    SignupService.addUser(register).then(res =>{
                        this.props.history.push('./login');
                    });                
                }
            })

              
        }

    }
    

    changeEmailId=(event)=>{
        this.setState({email:event.target.value});
    }

    changeUsername=(event)=>{
        this.setState({username:event.target.value});
    }

    changeMobileNumber=(event)=>{
        this.setState({mobileNumber:event.target.value});
    }

    changePassword=(event)=>{
        this.setState({password:event.target.value});
    }

    changeConfirmPassword=(event)=>{
        this.setState({confirmPassword:event.target.value});
    }

    render() {
        return (
            <div>
            <GuestNavbar />
            <div class="auth-wrapper">
                <div class="auth-inner">
                <form>
                <h3>Sign Up</h3>
                <div className="form-group">
                    <label>Email</label>
                    <input id="email" type="email" className="form-control" placeholder="Enter email" 
                        value={this.state.email} onChange={this.changeEmailId}/>
                </div>
                <div className="form-group">
                    <label>Username</label>
                    <input id="username" type="text" className="form-control" placeholder="Enter Username" 
                         value={this.state.username} onChange={this.changeUsername}   />
                </div>

                <div className="form-group">
                    <label>Mobile Number</label>
                    <input type="text" id="mobileNumber" className="form-control" placeholder="Enter Mobile Number"
                        value={this.state.mobileNumber} onChange={this.changeMobileNumber} />
                </div>

                

                <div className="form-group">
                    <label>Password</label>
                    <input id="password" type="password" className="form-control" placeholder="Enter password" 
                        value={this.state.password} onChange={this.changePassword}/>
                </div>
                <div className="form-group">
                    <label>Re-enter Password</label>
                    <input id="confirmPassword" type="password" className="form-control" placeholder="Confirm password"
                        value={this.state.confirmPassword} onChange={this.changeConfirmPassword} />
                </div>
                <br></br>
                <button id="submitButton" type="submit" className="btn btn-primary btn-block" onClick={this.signUpUser}>Sign Up</button>
                <br></br>
                <div class="text-center" >
                <a href="/login" id="signinLink" >Already a member?Click here</a>
            </div>
            </form>
            </div>
            </div>
            </div>
        );
    }
}