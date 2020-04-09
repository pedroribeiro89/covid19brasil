import React from 'react';
import {TitleHeaderStyle} from "../styles";

function TitleHeader() {
    return (
        <header style={TitleHeaderStyle.header}>
            <h1 style={TitleHeaderStyle.title}>DASHBOARD COVID-19 BRASIL</h1>
        </header>
    );
}

export default TitleHeader;
