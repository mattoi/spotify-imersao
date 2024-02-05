import React from "react";
import './PlaylistCard.css';

export default function PlaylistCard({ url, label, style }) {
    return (<a href="" className="cards">
        <div className="cards" style={style}>
            <img src={url} alt="" />
            <span>{label}</span>
        </div>
    </a>);
}