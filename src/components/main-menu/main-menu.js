import React from 'react'
import './main-menu.scss';
import {Link} from 'react-router-dom';
import {AiOutlineMenu} from 'react-icons/ai';

function mainMenu() {
    return (
        <div className='main-menu-container'>
            <div className="main-menu-logo">
                <Link to='/'>
                    LOGO
                </Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to='/navbars'>Navbars</Link>
                    </li>
                    <li>
                        <Link to='/buttons'>Buttons</Link>
                    </li>
                    <li>
                        <AiOutlineMenu className="menu-burger"/>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default mainMenu;
