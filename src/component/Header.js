
import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const Header = (props) => {
    return (
        <div className='appHeader'>
            <div className='LogoItem'>{props.title}</div>
            <ul>
                <li className='HeaderItem'><Link to='/'>Home</Link></li>
                <li className='HeaderItem'><Link to='/about'>About me</Link></li>
            </ul>  
        </div>
    )
}

export default Header;

