import React from 'react';
import './Dashboard.css';
import VerticalNavbar from './components/Navbar';
import Body from './components/Body';

function App() {
    return (
        <div className='app-container d-flex'>
            <VerticalNavbar />
            <Body />
        </div>
    );
}

export default App;
