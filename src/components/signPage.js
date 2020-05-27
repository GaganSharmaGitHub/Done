import React, { Component } from 'react'
import firebase from '../data/firebase'
export default class SignPage extends Component {
    state={
      email:'',
      password:'',
      confirmPassword:''
    }
    handleChange=(e)=> {
        this.setState({
          [e.target.name]: e.target.value
        });
      }
      handleSubmit=e=>{
        e.preventDefault()
        if(this.state.password!== this.state.confirmPassword){
          alert('Passwords do not match')
          return
        }
        console.log(this.state)
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(
          (e)=>{
            console.log(e)
          }
        ).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorMessage)
          // ...
        });
      }
    render() {
        return (
            
            <form onSubmit={this.handleSubmit} className='signUpForm'>
           <div className='ipgroup'>
            <label for='signUpMail'>Email:</label>
            <input  onChange={this.handleChange} value={this.state.email} name='email' type='email' className='signUpMail'></input>
            </div>
            <div className='ipgroup'>
            <label for='signUpUserName'>User name:</label>
            <input  onChange={this.handleChange} name='username' className='signUpUserName'></input>
            </div>
            <div className='ipgroup'>
            <label for='signUppwd'> Password:</label>
            <input  onChange={this.handleChange} value={this.state.password} name='password' type='password' className='signUppwd'></input>
            </div>
            <div className='ipgroup'>
            <label for='signUpConpwd'>Confirm Password:</label>
            <input  onChange={this.handleChange} value={this.state.confirmPassword} name='confirmPassword' type='password' className='signUpConpwd'></input>
            </div>
            
            <button>signUp</button>
            </form>
        )
    }
}
