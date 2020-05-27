import TopBar from './topBar'
import Todo from './todo'
import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import SideScreen from './sidescreen'

export default function MainScreen(pro) {
    return (
        <div className='mainScreen'>
        <BrowserRouter>
        <TopBar user={pro.user}></TopBar>
        <SideScreen user={pro.user}></SideScreen>
        </BrowserRouter>

        <div className='listTodo'>
        {pro.todos.map((todo)=>
            {
                return <Todo user={pro.user} key={todo} todoid={todo}></Todo>
        }
        )}
        </div>
    </div>

    )
}



