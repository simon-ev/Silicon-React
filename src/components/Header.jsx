import React from 'react'

function Header() {
  return (
    <header>
        <div className="container">
            
            <a id="logo" href="index.html">
                
                <img className="Silicon-logo" src="src/assets/images/header/logo.svg" alt="Silicon Logotype"></img>
            </a>

            <a className="Silicon-text" href="index.html">
                <img  src="src/assets/images/header/Silicon-text.svg" alt="Silicon"></img>

            </a>

            <nav id="main-menu" className="navbar">
                <a className="nav-link" href="#">Features</a>
            </nav>

            <div id="darkmode-toggle-switch" className="btn-toggle-switch">
                <span className="label">Dark mode</span>
                <label htmlFor="darkmode-switch" className="toggle-switch">
                    <input id="darkmode-switch" type="checkbox"></input>
                    <span className="slider round"></span>
                </label>
            </div>

            <a href="auth-signin" className="btn-primary">
                <i className="fa-regular fa-user"></i>
                <span>Sign in / up</span>
            </a>

        </div>
    </header>
  )
}

export default Header