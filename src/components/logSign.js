import React from 'react'
import LoginPage from './loginPage'
import SignPage from './signPage'

import {Link, BrowserRouter,Route} from 'react-router-dom'
export default function LogSign() {
    return (
        <div className='landing'>
            <div className='landingDec'>         
            </div>
            <BrowserRouter>
            <div className='signLogTab'>
            <Link to='/'><button>LOGIN</button></Link>
            <Link to='/signUp'><button>signup</button> </Link>
            <Route exact path='/signUp'>
            <SignPage></SignPage>
            </Route>
            <Route exact path='/'>
            <LoginPage></LoginPage>
            </Route>
            </div>
            </BrowserRouter>
            
        </div>
    )
}
