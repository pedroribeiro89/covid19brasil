import React from 'react';
import brlogo from '../assets/brazil-logo.png';

function TitleHeader() {
    const headerstyle = {
        padding:"10px",
        height: "50px",
        color: "white",
        backgroundColor: "black",
        display: "flex"
    } as React.CSSProperties;

    const titlestyle = {
        marginLeft: "5px",
        textAlign: "left",
        fontSize: "20px"
    } as React.CSSProperties;

    return (
        <header style={headerstyle}>
            <img src={brlogo}  alt="logo" />
            <h1 style={titlestyle}>COVID-19 BRASIL DASHBOARD</h1>
        </header>
    );
}

export default TitleHeader;
