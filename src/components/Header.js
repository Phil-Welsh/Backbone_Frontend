import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css';

const Header = () => {
    return (
        <header>
            <div>
                <ul className="headerLinks">
                    <li className="headerLis"><Link to={'/speedtest'}>Speedtest</Link></li>
                    <li className="headerLis"><Link to={'/map'}>Map</Link></li>
                    <li className="headerLis"><Link to={'/places'}>Hotspot list</Link></li>
                    <li className="headerLis"><Link to={'/login'}>Login</Link></li>
                    <li className="headerLis"><Link to={'/register'}>Make an account</Link></li>
                    <li className="headerLis"><Link to={'/profile'}>My profile</Link></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
