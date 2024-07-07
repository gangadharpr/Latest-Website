
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Navbar extends Component {
    render() {
        return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/#" className="navbar-brand">Gangadharam Vaddi</Link>
            <div className="ml-auto">
                <ul className="navbar-nav">
                    <li className="nav-list"><Link className="nav-link" to="/Home">Home</Link></li>
                    <li className="nav-list"><Link className="nav-link" to="/Portfolio">Portfolio</Link></li>
                    <li className="nav-list"><Link className="nav-link" to="/Admin">Admin</Link></li>
                    <li className="nav-list"><Link className="nav-link" to="/Clients">Clients</Link></li>

                </ul>
            </div>
        </nav>
    }
}

export default Navbar
