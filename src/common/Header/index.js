import React from 'react';
import HeaderMenu from './HeaderMenu';
import "./Header.css";
// import { history } from '../../helpers/helperConst';

function Header() {

    return (
        <header className="page-header">
            <div className="wrap">
                <div className="details-con">


                </div>  
                <nav className="menu-con">
                    <HeaderMenu />
                </nav>
            </div>
        </header>
    )
}

export default Header;
