import React from 'react';
import { Link } from 'react-router-dom';


//class -> className
export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <ul className="navbar-nav">
                <li className="nav-item">
                    {/* PROPERTY BINDING */}
                    <img src="https://www.jeep-india.com/content/dam/cross-regional/apac/jeep/en_crossregional/global/header/logo-jeep.png" style={{ height: 60, width: 100, padding: 10 }}></img>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="home">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="axios">Jeep Vehicles</Link>
                </li>
             
            </ul>
        </nav>
    )
}