import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
     <header>
        <div className="flex justify-between items-center">
            <div className="logo">
                <span className="logo-icon">S</span> SaaSMito
            </div>
            <nav>
                <ul>
                    <li><Link to={'/'} className="active">Home</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                    <li><Link to={'/service'}>Service</Link></li>
                    <li><Link to={'/blog'}>Blog</Link></li>
                    <li><Link to={'/contact'}>Contact</Link></li>
                </ul>
            </nav>
            <div className="auth-buttons">
                <Link to={"login"} className="sign-in">Sign In</Link>
                <Link to={"register"} className="sign-up">Sign Up</Link>
            </div>
        </div>
    </header>
  )
}

export default Navbar