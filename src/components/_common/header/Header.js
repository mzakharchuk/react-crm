import React from 'react'
import { NavLink } from 'react-router-dom'

import './header.css'

export const Header = ()=> {
    return(
        <nav className="navigation-bar">
            <a className="logo"><i className="fab fa-500px fa-2x logo-color"></i></a>
            <a href="/">Home</a>
            <a href="#">Projects</a>
            <a href="#">About</a>
            <a href="#">Profile</a>
        </nav>
    )
}