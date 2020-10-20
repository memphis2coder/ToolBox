import React from 'react'
import {Link} from 'react-router-dom';

function Sidebar() {
    return (
        <div className="sidebar-container">
            <nav>
                <div className="sidebar-logo">
                <Link to='/'>Logo</Link>
                </div>
                <ul>
                    <li>
                        <Link to='/navbars'>Navbars</Link>
                    </li>
                    <li>
                        <Link to='/buttons'>Buttons</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export default Sidebar;
