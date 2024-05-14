import React, {useState} from "react";
import {Link, NavLink} from "react-router-dom";
import "./Navbar.css"

function Navbar () {
    const [menuopen, setMenuOpen] = useState(false)
    return <>
    <nav>
    <Link to="/"className="tittle" >Website</Link>
    <div className="menu" onClick={()=> {
        setMenuOpen(!menuopen)
    }}>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <ul className={menuopen ? "open" :""}>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
    </ul>
    </nav>
    </>
};

export default Navbar;