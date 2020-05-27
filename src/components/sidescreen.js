import React from 'react'
import {Route} from 'react-router-dom'
import AddEvent from './addEvent'
export default function SideScreen(pro) {
    return (
        <div>
        <Route exact path='/addTask'><AddEvent user={pro.user}></AddEvent> </Route>
        <Route exact path='/settings'>
        <div>
        <button><i className="fa fa-android" ></i> Android App</button>
        <button><i className="fa fa-apple" ></i> iOS App</button>
        <button><i class="fa fa-windows" ></i>Windows App</button>
        </div>
        </Route>    
        </div>
    )
}
