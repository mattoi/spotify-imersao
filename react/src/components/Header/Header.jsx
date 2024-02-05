import React from "react";
import './Header.css';
import smallLeft from '../../assets/icons/small-left.png';
import smallRight from '../../assets/icons/small-right.png';
import search from '../../assets/icons/search.png';
const Header = ({ onChangeFunction }) => {
    return (
        <nav className="header__navigation">
            <div className="navigation">
                <button className="arrow-left">
                    <img src={smallLeft} alt="Seta esquerda" />
                </button>
                <button className="arrow-right">
                    <img src={smallRight} alt="Seta direita" />
                </button>
                <div className="header__search">
                    <img src={search} alt="" />
                    <input id="search-input" type="text" maxLength="800" autoCorrect="off" spellCheck="false"
                        placeholder="O que você quer ouvir?" onChange={(e) => onChangeFunction(e.target.value)}
                    />
                </div>
            </div>
            <div className="header__login">
                <button className="subscribe">Inscreva-se</button>
                <button className="login">Entrar</button>
            </div>

        </nav>
    )
};

export default Header;