import React, { Suspense, useState, useEffect } from "react";
import ArtistCard from "../ArtistCard/ArtistCard";
import './SearchResultsContainer.css';
const SearchResultsContainer = ({ input }) => {
    const [artists, setArtists] = useState(new Set());
    let cardList = new Set();
    useEffect(() => {
        fetchData(input).then(data => {
            if (data.length > 0) {
                setArtists(data);
            }
        });
    }, [input]);
    for (let i = 0; i < artists.length; i++) {
        cardList = [...cardList, <ArtistCard key={artists[i].id} name={artists[i].name} imgSrc={artists[i].urlImg} />];
    }

    return (<div id="result-artist">
        <div className="grid-container">
            <Suspense fallback={<h3>Carregando...</h3>}>
                {cardList}
            </Suspense>

        </div>
    </div>);
};

export default SearchResultsContainer;

async function fetchData(input) {
    const url = `http://localhost:5000/artists?name_like=${input}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}