import React from 'react'
import { NavLink } from 'react-router-dom'

import './sidebar.css'

export class Sidebar extends React.Component {
    render(){
        return (
            <div className="sidenav">
                <NavLink to="/" exact activeClassName="active">Home</NavLink>
                <NavLink to="/message" activeClassName="active">Message</NavLink>
                <NavLink to="/settings" activeClassName="active">Settings</NavLink>
          </div>
        )
    }
}
