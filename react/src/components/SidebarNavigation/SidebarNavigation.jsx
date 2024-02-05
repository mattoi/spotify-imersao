import React from "react";
import './SidebarNavigation.css';
import logo from '../../assets/icons/logo-spotify.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SidebarNavigation = () => {
    return (
        <nav className="sidebar__navigation">
            <div className="logo">
                <a href="">
                    <img src={logo} alt="Logo do Spotify" />
                </a>
            </div>
            <ul>
                <li><a href="">
                    <FontAwesomeIcon icon={faHouse} style={{ paddingRight: "4px" }} />
                    <span>Início</span>
                </a>
                </li>
                <li><a href="">
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{ paddingRight: "4px" }} />
                    <span>Buscar</span>
                </a>
                </li>
            </ul>
        </nav>
    );
};

export default SidebarNavigation;