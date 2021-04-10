import React from 'react'
import {Link} from 'react-router-dom'

export const MainPage = () => {
    return (
        <div>
            <Link to='/signup' className='nav nav-link'>SignUp</Link>
            <Link to='/login' className='nav nav-link'>logIn</Link>
        </div>
    )
}
