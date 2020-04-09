import {CSSProperties} from "react";

export class Colors {
    static basic = '#3F4652';
    static basic2 = '#272C33';
    static primary = '#FFFFFF';
    static secondary = '#000000'
    static accent = '#FFD700';
}

export class Style {
    static main: CSSProperties = {
        backgroundColor: Colors.basic,
        fontFamily: 'Roboto, sans-serif',
        color: Colors.primary
    };
}

export class TitleHeaderStyle {
    static header: CSSProperties = {
        padding:"10px",
        height: "50px",
        color: Colors.secondary,
        backgroundColor: Colors.accent,
        display: "flex"
    };

    static title: CSSProperties = {
        marginLeft: "5px",
        textAlign: "left",
        fontSize: "20px"
    };
}

export class InfoStyle {
    static article: CSSProperties = {
        width: '50%',
        margin: '40px auto',
        border: `1px solid ${Colors.accent}`,
        padding: '20px',
        textAlign: 'center'
    };

    static text: CSSProperties = {
        fontSize: '20px',
    };

    static link: CSSProperties = {
        color: Colors.accent,
    };
}

export class CountryListStyle {
    static section: CSSProperties = {
        padding: '5px 20px'
    };

    static list: CSSProperties = {
        width: "25em",
        height: "25em",
        lineHeight: "3em",
        border: "1px solid #ccc",
        borderRadius: '10px',
        padding: "0",
        margin: "0",
        overflow: "scroll",
        overflowX: "hidden",
        float: 'left'
    };

    static item: CSSProperties = {
        borderBottom: '1px solid white',
        textAlign: 'center',
        cursor: 'pointer'
    };

    static selectedCountryContainer: CSSProperties = {
        float: 'left',
        width: '70%',
        height: '25em',
        padding: '20px'
    };

    static selectedCountry: CSSProperties = {
        minWidth: '200px',
        maxWidth: '450px',
        border: '1px solid white',
        float: 'left',
        marginRight: '10px',
        marginBottom: '10px'
    };

    static selectedCountryBtn: CSSProperties = {
        width: '20%',
        float: 'right',
        borderLeft: '1px solid white',
        textAlign: 'center',
        backgroundColor: Colors.accent,
        color: Colors.secondary,
        fontWeight: 'bold',
        cursor: 'pointer'
    };
}

export class StatusSelectStyle {
    static container: CSSProperties = {
        width: '50%',
        margin: 'auto'
    };

    static option: CSSProperties = {
        width: "10em",
        height: "20px",
        padding: "10px",
        textAlign: 'center',
        fontWeight: 'bold',
        float: 'left',
        cursor: 'pointer',
        border: '1px solid white',
        margin: '25px 10px'
    };

    static selected: CSSProperties = {
        width: '10em',
        height: '20px',
        padding: '10px',
        border: '1px solid black',
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
        backgroundColor: Colors.accent,
        float: 'left',
        margin: '25px 10px'
    }
}

export class CountryDetailListStyle {
    static container: CSSProperties = {
        margin: "auto",
        padding: '10px'
    };

    static list: CSSProperties = {
        width: "25em",
        height: "25em",
        lineHeight: "3em",
        padding: "0",
        margin: "auto",
        overflow: "scroll",
        overflowX: "hidden"
    };

    static link: CSSProperties = {
        color: Colors.accent
    };
}

export class CountryDashboardStyle {
    static container: CSSProperties = {
        padding: '10px'
    };

    static list: CSSProperties = {
        width: "25em",
        height: "25em",
        lineHeight: "3em",
        padding: "0",
        margin: "auto",
        overflow: "scroll",
        overflowX: "hidden"
    };

    static link: CSSProperties = {
        color: Colors.accent
    };

    static title: CSSProperties = {
        textAlign: 'center'
    };

    static text: CSSProperties = {
        width: '50%',
        textAlign: 'center',
        margin: 'auto'
    };

}

// https://www.canva.com/colors/color-palettes/bright-happy-meadow/
// https://www.canva.com/colors/color-palettes/varsity-brights/
