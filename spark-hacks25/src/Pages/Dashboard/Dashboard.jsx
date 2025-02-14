import React from 'react';
import './Dashboard.css';
import VerticalNavbar from './components/Navbar';
import Body from './components/Body';

function Dashboard() {
    return (
        <div className='app-container d-flex'>
            <VerticalNavbar />
            <Body />
        </div>
    );
}

export default Dashboard;
