import React from "react";
import PlaylistCard from "../PlaylistCard/PlaylistCard";
import './PlaylistContainer.css';
import playlists from './playlists';
const PlaylistContainer = () => {
    let cardList = [];
    for (let i = 0; i < playlists.length; i++) {
        cardList.push(<PlaylistCard url={playlists[i].img} label={playlists[i].label} style={{ backgroundColor: playlists[i].backgroundColor }} />);
    };
    return (
        <div className="playlist-container">
            <div id="result-playlists">
                <div className="playlist">
                    <h1 id="greeting">Boas vindas</h1>
                    <h2 className="session">Navegar por todas as seções</h2>
                </div>
                <div className="offer__scroll-container">
                    <div className="offer__list">
                        <section className="offer__list-item">
                            {cardList}

                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaylistContainer;   