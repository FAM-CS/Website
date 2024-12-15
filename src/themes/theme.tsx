import { css, Theme } from "@emotion/react";

const theme : Theme = {
    colors: {
        primary: "#8075FF",
        primaryAlt: "#544BB3",
        secondary: "#F1E4F3",
        secondaryAlt: "#C1B3C3",
        tertiary: "#E2C044",
        accent: "#ED6A5A",
        backgroundSolid: "#4E3C6C",
        background: "rgba(36,20,60,0.4)",
        backgroundDark: "#170632"
    }
}


export const globalStyles = css`
    body {
        font-family: Roboto, system-ui, Avenir, Helvetica, Arial, sans-serif;
        line-height: 1.5;
        font-weight: 400;

        height: 100vh;
        width: 100vw;
        overflow-y: hidden;     /* pretend this does not exist */

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        margin: 0;
        color: ${theme.colors.secondary};
        background:  var(--sunset, linear-gradient(180deg, #4912A0 3.77%, #7168FA 26.31%, #F28A3A 66.87%));
    }

    h1, h2 {
        font-size: 22px;
        margin: 0;
    }

    #root {
        height: 100%;
        width: 100%;
    }


    a {
        font-weight: 500;
        color: #9da1f1;
        text-decoration: inherit;
    }

    a:hover {
        color: #535bf2;
    }

    button {
        font-family: Roboto, system-ui, Avenir, Helvetica, Arial, sans-serif;
        cursor: pointer;
        border: none;
        padding: 0;
        margin: 0;
    }

    button:hover {
        border: none;
    }

    button:focus,
    button:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
    }
`

export default theme