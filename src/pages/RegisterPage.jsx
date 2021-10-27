import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { BsFacebook } from "react-icons/bs";
import { FaGoogle } from "react-icons/fa";
import "../styles/register.css"
import { connect } from 'react-redux';
import { register } from '../redux/action/userAction';
import {Redirect} from "react-router-dom"
 class RegisterPage extends Component {
     state={
         name:"",
         email:"",
         password:""
     }
  onChange =(e)=>{
      this.setState({[e.target.name]:e.target.value})
     }
     handelSubmit =e=>{
         e.preventDefault()
         const {email,password,name } = this.state
         if(!name || !email || !password) return alert("enter all filed")
         this.props.register(name,email,password)
     }
    render() { if(this.props.user ) return <Redirect to="/home" />
        return (
            <div className="registerPage">
                <div className="imageRegister">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9b3267c9-5086-4550-92f1-eddc22a1f78e/8b897a27-47f0-42d0-bb50-10fdb72d34a2/IN-en-20211004-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="backImage" />
                </div>
                    <div className="registerContainer">
                    <div className="h2">
                        <h1>Sign Up</h1>
                    </div>
               <form onSubmit={this.handelSubmit}>
               <input type="text" name="name" placeholder="Enter Name" value={this.state.name} onChange={this.onChange}  required/>
                <input type="email" name="email" placeholder="Enter Email" value={this.state.email} onChange={this.onChange}   required/>
                <input type="password" name="password" placeholder="Enter password" value={this.state.password} onChange={this.onChange}   required/>
                <input type="submit"  style={{"backgroundColor":"#E50941","padding":"16px 150px","color":"#fff"}} value="Sign Up"  />
               </form>
                <div className="signUp"><p>Already A Member? <Link to="/signIn">Sign In</Link></p>
                    <button type="submit"><BsFacebook/> Login With Facebook  </button>
                    <button type="submit"><FaGoogle/> Login With Google  </button>
                     </div>
                </div>
            </div>
        )
    }
}

const mapStateStore = stateStore =>{
    return{
        user:stateStore.userState.user
    }
}
export default connect(mapStateStore,{register})(RegisterPage)
