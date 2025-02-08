import React from 'react';
import './index.css';

const Header = () => {
    return (
        <header className="header-container">
            <div className="logo">My Logo</div>
            <div className="profile-container">
                <div className="profile">
                    <img src="profile-pic.jpg" alt="Profile" />
                </div>
                <i className="bell-icon fas fa-bell"></i>
            </div>
        </header>
    );
};

export default Header;
