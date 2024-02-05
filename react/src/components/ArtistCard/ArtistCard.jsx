import React from "react";
import "./ArtistCard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

export default function ArtistCard({ key, imgSrc, name }) {
    return (
        <div className="artist-card" id="artist-card">
            <div className="card-img">
                <img id="artist-img" className="artist-img" src={imgSrc} />
                <div className="play">
                    <FontAwesomeIcon icon={faPlay} />
                </div>
            </div>
            <div className="card-text">
                <a title={name} className="vst" href=""></a>
                <span className="artist-name" id="artist-name">{name}</span>
                <span className="artist-categorie">Artista</span>
            </div>
        </div>
    );
}