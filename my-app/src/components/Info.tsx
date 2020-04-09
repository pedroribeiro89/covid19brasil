import React from "react";
import {InfoStyle} from "../styles";

function Info() {
    return (
        <article style={InfoStyle.article}>
            <h1>Sobre o Dashboard</h1>
            <p style={InfoStyle.text}>
                Os dados deste dashboard são
                da <a style={InfoStyle.link} target="_blank" href='https://github.com/CSSEGISandData/COVID-19'>Johns Hopkins CSSE</a> que sao fornecidos pela api <a style={InfoStyle.link} target="_blank" href='https://covid19api.com/'>covid19api</a> Tem como objetivo comparar a evolução dos casos de Corona vírus(Confirmados, Mortes e Recuperados) entre países.
            </p>
        </article>
    );
}

export default Info;
