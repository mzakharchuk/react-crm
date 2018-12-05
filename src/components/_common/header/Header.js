import React from 'react'
import { NavLink } from 'react-router-dom'

import './header.css'

export const Header = ()=> {
    return(
        <nav className="navigation-bar row">
        <div className="col-md-6">   
            <a className="logo col-md-6" href="/"><i className="fab fa-500px fa-2x logo-color"></i></a>
        </div>
        <div className="col-md-6 navigation-bar__profile">     
            <a  href="#">Profile</a>
        </div>
        </nav>
    )
}