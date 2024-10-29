import { css, Theme } from "@emotion/react";

const theme : Theme = {
    colors: {
        primary: "#8075FF",
        primaryAlt: "#544BB3",
        secondary: "#F1E4F3",
        tertiary: "#E2C044",
        accent: "#ED6A5A",
        backgroundSolid: "#4E3C6C",
        background: "rgba(36,20,60,0.25)",
    }
}


export const globalStyles = css`
    body {
        font-family: Roboto, system-ui, Avenir, Helvetica, Arial, sans-serif;
        line-height: 1.5;
        font-weight: 400;

        height: 100vh;
        width: 100vw;

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        margin: 0;
        color: ${theme.colors.secondary};
        background-color: ${theme.colors.backgroundSolid};
        background-image: url("/tile.svg");
        background-position: center;
    }

    #root {
        height: 100%;
        width: 100%;
    }


    a {
        font-weight: 500;
        color: #646cff;
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