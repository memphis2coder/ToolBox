import React, {useState} from 'react'
import './main-menu.scss';
import {Link} from 'react-router-dom';
import {AiOutlineMenu} from 'react-icons/ai';

function mainMenu() {
    

    return (
        <header className='header'>
            <div className="logo-container">
                <Link className='logo' to='/'>LOGO</Link>
            </div>
                <nav className="nav">
                    <Link className="nav-link" to='/navbars'>Navbars</Link>
                    <Link className="nav-link" to='/buttons'>Buttons</Link>
                </nav>
                    <span>
                        <AiOutlineMenu className="burger"/>
                    </span>
        </header>
    )
}

export default mainMenu;
