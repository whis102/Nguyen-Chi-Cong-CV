import React from 'react'
import './Header.scss'

function Header() {
    return (
        <header className="header">
            <nav className="navigation">
                <ul className="nav-list">
                    <li className="nav-item">ABOUT</li>
                    <li className="nav-item">SKILLS</li>
                    <li className="nav-item">EXPERIENCES</li>
                    <li className="nav-item">EDUCATION</li>
                    <li className="nav-item">CERTIFICATES</li>
                    <li className="nav-item">PROJECTS</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
