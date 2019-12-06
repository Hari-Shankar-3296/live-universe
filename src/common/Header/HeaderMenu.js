import React from 'react';
import { Link } from "react-router-dom";

const menus = [
    {
        title: "Planets", 
        path: "/planets",
    },
    {
        title: "3D View", 
        path: "/live/3D",
    },
    {
        title: "About Us", 
        path: "/about",
    },
]

export default function HeaderMenu() {
    return (
        <ul className="header-menu">
            {
                menus.map( eachMenu => {
                    return (
                        <li className="h-menu-item">
                            <Link to={eachMenu.path}>{ eachMenu.title }</Link>
                        </li>
                    )
                } )
            }
        </ul>
    )
}
