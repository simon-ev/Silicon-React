import React from 'react'

function Header() {
  return (
    <header>
    <div class="container">
        
        <a id="logo" href="index.html"><img src="src/assets/images/header/logo.svg" alt="Silicon Logotype"></img></a>

        <nav id="main-menu" class="navbar">
            <a class="nav-link" href="#">Features</a>
        </nav>

        <div id="darkmode-toggle-switch" class="btn-toggle-switch">
            <span class="label">Dark mode</span>
            <label for="darkmode-switch" class="toggle-switch">
                <input id="darkmode-switch" type="checkbox"></input>
                <span class="slider round"></span>
            </label>
        </div>

        <a href="auth-signin" class="btn-primary">
            <i class="fa-regular fa-user"></i>
            <span>Sign in / up</span>
        </a>

    </div>
</header>
  )
}

export default Header