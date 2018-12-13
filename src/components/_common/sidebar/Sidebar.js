import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';

import './sidebar.css'


const Sidenav = styled.div`
    height: 100%;
    width: 200px;
    position: fixed;
    z-index: 1;
    top: 45px;
    left: 0;
    background-color: #1b2135;
    overflow-x: hidden;
    padding-top: 20px;
`
const activeClassName = 'active-nav-link';
const SideNanLink = styled(NavLink).attrs({
    activeClassName: activeClassName,
  })`
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 20px;
    color: #818181;
    display: block;
    border: none;
    background: none;
    width: 100%;
    text-align: left;
    cursor: pointer;
    outline: none;

    &:hover{
        padding: 6px 8px 6px 16px;
        text-decoration: none;
        font-size: 20px;
        color: #f8f9fa;
        display: block;
        border: none;
        background: #d9bc7f;
        width: 100%;
        text-align: left;
        cursor: pointer;
        outline: none;
    }
    &.active-nav-link {
        background-color: #556797;
        color: #f8f9fa;
      }

`
export class Sidebar extends React.Component {
    render(){
        return (
            <div>
                <Sidenav>
                <SideNanLink to="/" exact activeClassName="active-nav-link">Home</SideNanLink>
                <SideNanLink to="/message" activeClassName="active-nav-link">Message</SideNanLink>
                <SideNanLink to="/settings" activeClassName="active-nav-link">Settings</SideNanLink>
                </Sidenav>
            </div>
        //     <div className="sidenav">
        //         <NavLink to="/" exact activeClassName="active-nav-link">Home</NavLink>
        //         <NavLink to="/message" exact activeClassName="active-nav-link">Message</NavLink>
        //         <NavLink to="/settings" exact activeClassName="active-nav-link">Settings</NavLink>
        //   </div>
        )
    }
}
