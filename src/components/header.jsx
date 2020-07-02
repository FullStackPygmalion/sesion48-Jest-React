import React from 'react'

const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed">
        <div className="container">
            <a className="navbar-brand" href="/"> Shopping React</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-authref">
                    <li className="nav-item active">
                        <a className="nav-a" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-a" href="/register">Register</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-a" href="/login">Login</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)

export default Header