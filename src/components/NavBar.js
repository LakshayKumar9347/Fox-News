import React, { Component } from 'react'
import logo from './logo.png'

export default class NavBar extends Component {
    render() {
        return (
    <div>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
        <img className="navbar-brand " style={{ width: '2rem' }} alt='Not Found' src={logo} />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">HOME</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">ABOUT</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">CREDITS</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">CONTACT</a>
                </li>
            </ul>
        </div>
    </div>

    <div className="dropdown" style={{ margin: "0 2.8rem" }}>
    {/* //todo testing drop down */}
        <button className="btn btn-secondary dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
            CATEGORY
        </button>
        <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">BUSINESS</a></li>
            <li><a className="dropdown-item" href="#">ENTERTAINMENT</a></li>
            <li><a className="dropdown-item" href="#">SCIENCE</a></li>
            <li><a className="dropdown-item" href="#">SPORTS</a></li>
            <li><a className="dropdown-item" href="#">TECHNOLOGY</a></li>
        </ul>
    </div>
</nav>
</div>
   )
  }
}