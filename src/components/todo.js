import React, { Component } from 'react'
import firebase from '../data/firebase'
export default class Todo extends Component {
    state={
        title:'loading..',
        done: false,
        time: 0,
        description:'none'
    }
    handleCheck=(e)=>{
        const database = firebase.firestore()
        const userData= database.collection("users").doc(this.props.user).collection('todos').doc(this.props.todoid).set({
            done: e.target.checked
        }, { merge: true });
        //console.log()
       
    }
    handleDelete=()=>{
        const database = firebase.firestore()
        const userData= database.collection("users").doc(this.props.user).collection('todos').doc(this.props.todoid).delete().then(()=>alert('Task Deleted'))
    }
    componentDidMount(){
        let temp= this.state
     const database = firebase.firestore()
     const userData= database.collection("users").doc(this.props.user).collection('todos').doc(this.props.todoid)
     userData.onSnapshot(data=>{
       temp= data.data()
       this.setState(temp)
     })
    }
    render() {
        return (
            <div className={this.state.done?'todo done':'todo notDone'}>
            <input onChange={this.handleCheck} id={this.state.title} checked={this.state.done} type='checkbox'></input>
            <label htmlFor={this.state.title} >
        <svg height="512pt" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg">
        <path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0" fill="#2196f3"/>
        <path className={this.state.done?'tickShow':'tickHidden'}  d="m385.75 201.75-138.667969 138.664062c-4.160156 4.160157-9.621093 6.253907-15.082031 6.253907s-10.921875-2.09375-15.082031-6.253907l-69.332031-69.332031c-8.34375-8.339843-8.34375-21.824219 0-30.164062 8.339843-8.34375 21.820312-8.34375 30.164062 0l54.25 54.25 123.585938-123.582031c8.339843-8.34375 21.820312-8.34375 30.164062 0 8.339844 8.339843 8.339844 21.820312 0 30.164062zm0 0" fill="#fafafa"/></svg>
            
            </label>

            <h4>{this.state.title}</h4>
            <span>{this.state.time}</span>

            <svg onClick={this.handleDelete} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" className='delete'
	 viewBox="0 0 384 484">
<g>
	<g>
		<g>
			<path d="M64,341.333C64,364.907,83.093,384,106.667,384h170.667C300.907,384,320,364.907,320,341.333v-256H64V341.333z"/>
			<polygon points="266.667,21.333 245.333,0 138.667,0 117.333,21.333 42.667,21.333 42.667,64 341.333,64 341.333,21.333 			"/>
		</g>
	</g>
</g></svg>

        </div>

        )
    }
}

