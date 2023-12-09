import React from 'react'
import './header.scss'
import { BrowserRouter as Router, Navlink,Route,Routes} from "react-router-dom";
import {Contacts, Help, Info, Results} from ".../pages"

export default function Header() {
  return (
    <header>
        <div className="container flex-wrapper">
            <div className="logo-wrapper">
              <NavLink to="/">FromUniverwithL</NavLink>
              <p className="slogan">We can help you!</p>
            </div>
            <nav>
             <ul>
             <NavLink to="/info"><li>Info</li></NavLink>
                <NavLink to="/results"><li>Our results</li></NavLink>
                <NavLink to="/help"><li>Help</li></NavLink>
                <NavLink to="/contacts"><li>Contacts</li></NavLink>
             </ul>
            </nav>
        </div>
    </header>
  )
}
