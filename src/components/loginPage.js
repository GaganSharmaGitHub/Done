import React, { Component } from 'react'
import firebase from '../data/firebase'
export default class LoginPage extends Component {
    state={
      email:'',
      password:''
    }
    handleChange=(e)=>{
        this.setState({
          [e.target.name]: e.target.value
        });
      }
      
      handleSubmit=(e)=>{
        e.preventDefault()
        if(!(this.state.email||this.state.password)){
          alert('Enter email and password')
        }
        var result = firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password);
        //g(id)
        result.then((user)=>{
          
        })
        result.catch((error) => {
          var errormessage = error.message;
          window.alert(`Message : ${errormessage}`);
        });
      }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className='loginForm'>
            <div className='ipgroup'>
            <label for='loginUserName'>User name:</label>
            <input onChange={this.handleChange} value={this.state.email} name='email' className='loginUserName'></input>
            </div>
            <div className='ipgroup'>
            <label for='loginpwd'> Password:</label>
            <input onChange={this.handleChange} name='password' value={this.state.password} type='password' className='loginpwd'></input>
            </div>
            <button>Login</button>
            </form>
        )
    }
}

var result = firebase.auth().signInWithEmailAndPassword('gagan3103sharma2000@gmail.com', 'todoapppwd');
//g(id)
result.then((user)=>{
  
})
result.catch((error) => {
  var errormessage = error.message;
  window.alert(`Message : ${errormessage}`);
});