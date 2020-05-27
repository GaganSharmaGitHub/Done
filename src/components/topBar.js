import React from 'react'
import {Link} from 'react-router-dom'
import firebase from '../data/firebase'
export default function TopBar() {
    return (
        <div className='topBar'>
        <Link to='/addTask'>
            <button> <i className="fa fa-plus-circle"></i> Add Task</button>
        </Link>
            <Link to='/settings'>
            <button>
            <i className="fa fa-download" ></i> Downloads
            </button>
            </Link>
    <button onClick={()=>firebase.auth().signOut()}><i className="fa fa-sign-out"></i> Logout</button>
        </div>
    )
}
