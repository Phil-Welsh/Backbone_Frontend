import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css';

const Header = () => {
    return (
        <header>
            <div>
                <ul className="headerLinks">
                    <li><Link to={'/speedtest'}>Speedtest</Link></li>
                    <li><Link to={'/map'}>Map</Link></li>
                    <li><Link to={'/places'}>Hotspot list</Link></li>
                    <li><Link to={'/login'}>Login</Link></li>
                    <li><Link to={'/register'}>Make an account</Link></li>
                    <li><Link to={'/profile'}>My profile</Link></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
