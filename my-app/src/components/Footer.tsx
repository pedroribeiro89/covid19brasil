import React from 'react';

function Footer() {
    const footerStyle = {
        position: "fixed",
        left: "0",
        bottom: "0",
        width: "100%",
        backgroundColor: "red",
        color: "white",
        textAlign: "center"
    } as React.CSSProperties;
    return (
        <footer style={footerStyle}>
            footer
        </footer>
    );
}

export default Footer;
