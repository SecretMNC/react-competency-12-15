import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/bio-builder">Build A Bio</Link>
            <Link to="/search">Search For Bios</Link>
        </div>
    )
}

export default Header;