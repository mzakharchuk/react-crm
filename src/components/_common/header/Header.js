import React from 'react'
import { NavLink } from 'react-router-dom'

import './header.css'

export const Header = () => {
    return(
        <nav className="navigation-bar row">
            <div className="col-md-10">   
                <a className="logo col-md-6" href="/"><i className="fab fa-500px fa-2x logo-color"></i></a>
            </div>
            <div className="col-md-2 navigation-bar__profile">    
            <div>
                <div className="dropdown">
                    <a className="dropbtn">Profile
                    <i className="fa fa-caret-down"></i>
                    </a>
                    <div className="dropdown-content">
                        {/* <NavLink className='sub-menu' to="/login">Logout&nbsp;<i className="fas fa-sign-out-alt"></i></NavLink> */}
                    </div>
                </div> 
            </div> 
            </div>
        </nav>
    )
}