import React from 'react';
import './Header.css';

const Header = props => (
    <div className='row header-row'>
        <div className='col'>
            <h1>***</h1>
        </div>
        <div className='col'>
            <div className='user-button'><i className="fas fa-user-alt"></i></div>
        </div>
    </div>
);

export default Header;
