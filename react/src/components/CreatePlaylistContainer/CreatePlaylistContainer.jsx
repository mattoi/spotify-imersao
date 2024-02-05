import React from "react";
import './CreatePlaylistContainer.css';
const CreatePlaylistContainer = () => {
    return (
        <section className="section-playlist">
            <div className="section-playlist__content">
                <span className="text title">Crie sua primeira playlist</span>
                <span className="text subtitle">É fácil, vamos te ajudar.</span>
                <button className="section-playlist__button">
                    <span>Criar playlist</span>
                </button>
            </div>
        </section>
    );
};

export default CreatePlaylistContainer;