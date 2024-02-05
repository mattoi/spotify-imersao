import React from "react";
import { useState } from "react";
import './MainContainer.css';
import Header from "../Header/Header";
import PlaylistContainer from "../PlaylistContainer/PlaylistContainer";
import SearchResultsContainer from "../SearchResultsContainer/SearchResultsContainer";
const MainContainer = () => {
    const [input, setInput] = useState("");
    const onChangeFunction = (text) => setInput(text);

    return (
        <div className="main-container">
            <Header onChangeFunction={onChangeFunction} />
            {/* TODO se a pesquisa estiver vazia, mostrar as playlists; senão, mostrar a pesquisa de artista */}
            {input === ""
                ? <PlaylistContainer />
                : <SearchResultsContainer input={input} />
            }
        </div>
    )
};

export default MainContainer;