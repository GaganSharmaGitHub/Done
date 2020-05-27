import React, { Component } from 'react'
import firebase from '../data/firebase'
export default class AddEvent extends Component {
  state={
    title:'',
    done: false,
    time: '2020-04-07',
    description:'none'
}
    handleChange=(e)=>{
        this.setState({
          [e.target.name]: e.target.value
        });
        //console.log(e.target.value)
      }
      handleSubmit=(e)=>{
        e.preventDefault()
        const database = firebase.firestore()
        const userData= database.collection("users").doc(this.props.user).collection('todos')
        userData.add(this.state).then(()=>{
          alert(`Added task ${this.state.title}`)
          this.setState({
            title:'',
            done: false,
            time: '2020-04-07',
            description:''
        })}
        )   
      }
    render() {
        return (
          
            <form onSubmit={this.handleSubmit} className='addTaskForm'>
            <div className='ipgroup'>
            <label htmlFor='addTaskTitle'>Title:</label>
            <input value={this.state.title} name='title' onChange={this.handleChange}  className='addTaskTitle'></input>
            </div>
            <div className='ipgroup'>
            <label htmlFor='addTaskTime'>Date:</label>
            <input name='time' value={this.state.time} onChange={this.handleChange} type='date' className='addTaskTime'></input>
            </div>
            <div className='ipgroup'>
            <label htmlFor='addTaskTitle'>Description:</label>
            <input name='description' value={this.state.description} onChange={this.handleChange} className='addTaskTitle'></input>
            </div>
            <button >Add</button>
            </form>
        )
    }
}
