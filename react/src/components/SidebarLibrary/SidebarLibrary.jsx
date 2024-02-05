import React from "react";
import './SidebarLibrary.css';
import CreatePlaylistContainer from "../CreatePlaylistContainer/CreatePlaylistContainer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faGlobe } from '@fortawesome/free-solid-svg-icons';
const SidebarLibrary = () => {
    return (
        <div className="library">
            <div className="library__content">
                <button className="library__button">
                    <FontAwesomeIcon icon={faBook} style={{ paddingRight: "4px" }} />
                    <span>Sua biblioteca</span>
                </button>

            </div>
            <CreatePlaylistContainer />
            <div className="cookies">
                <a href="">Cookies</a>
            </div>
            <div className="languages"><button className="languages__button">
                <FontAwesomeIcon icon={faGlobe} style={{ paddingRight: "4px" }} />
                <span>Português do Brasil</span>
            </button>
            </div>
        </div>
    );
};

export default SidebarLibrary;