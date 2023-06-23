import React, { Component } from 'react'
import logo from './logo.png'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return (
            <div style={{position:"fixed",width:"100vw",height:"3rem",top:"0",zIndex:"1"}}>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <img className="navbar-brand " style={{ width: '2rem' }} alt='Not Found' src={logo} />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse  justify-content-between" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to='/'>HOME</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/about'>ABOUT</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/credits'>CREDITS</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/contact'>CONTACT</Link>
                                </li>
                            </ul>

                            {/* //todo testing drop down */}
                            <div className="dropdown" style={{ margin: " 0 2rem 0 0" }}>
                                <button className="btn btn-secondary dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    CATEGORY
                                </button>
                                <ul className="dropdown-menu" style={{ cursor: "pointer" }}>
                                    <Link  to="/business"  className="dropdown-item">BUSINESS</Link >
                                    <Link  to="/health"  className="dropdown-item">HEALTH</Link>
                                    <Link  to="/entertainment"  className="dropdown-item">ENTERTAINMENT</Link>
                                    <Link  to="/science"  className="dropdown-item">SCIENCE</Link>
                                    <Link  to="/sports"  className="dropdown-item">SPORTS</Link>
                                    <Link  to="/technology"  className="dropdown-item">TECHNOLOGY</Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}