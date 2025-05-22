import React from 'react'
import './Footer.css'

function Footer() {
  return (
     <footer>
        <div className="px-2">
            <div className="footer-grid">
                <div className="footer-about">
                    <div className="logo">
                        <span className="logo-icon">S</span> SaaSMito
                    </div>
                    <p>SaasMito is software as a service app & web based technology to manage all kind of tool.</p>
                    <div className="social-icons">
                        <a href="#">FB</a>
                        <a href="#">TW</a>
                        <a href="#">IG</a>
                        <a href="#">IN</a>
                    </div>
                </div>
                <div className="footer-links">
                    <h4>Business</h4>
                    <ul>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Software Center</a></li>
                        <li><a href="#">Certified Consultant</a></li>
                        <li><a href="#">Customer Stories</a></li>
                    </ul>
                </div>
                <div className="footer-links">
                    <h4>Plans</h4>
                    <ul>
                        <li><a href="#">Enterprise</a></li>
                        <li><a href="#">Personal</a></li>
                        <li><a href="#">Getting Started</a></li>
                        <li><a href="#">Business</a></li>
                    </ul>
                </div>
                <div className="footer-links">
                    <h4>Support</h4>
                    <ul>
                        <li><a href="#">Help & Docs</a></li>
                        <li><a href="#">Support Center</a></li>
                        <li><a href="#">Forum</a></li>
                        <li><a href="#">Developers</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2023 SaaSMito. All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer