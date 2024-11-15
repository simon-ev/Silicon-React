import React, { useEffect, useState } from 'react'

function Header() {

    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        const storedThemeMode = localStorage.getItem('themeMode')

        if (storedThemeMode === 'dark' || (!storedThemeMode && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsDarkMode(true)
            document.documentElement.classList.add('dark')
        } else {
            setIsDarkMode(false)
            document.documentElement.classList.remove('dark')
        }
    })

    const handleThemeToggle = () => {
        if (isDarkMode) {
            setIsDarkMode(false)
            localStorage.setItem('themeMode', 'light')
            document.documentElement.classList.remove('dark')
        } else {
            setIsDarkMode(true)
            localStorage.setItem('themeMode', 'dark')
            document.documentElement.classList.add('dark')
        }
    }

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
                    <input id="darkmode-switch" type="checkbox" checked={isDarkMode} onChange={handleThemeToggle}></input>
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