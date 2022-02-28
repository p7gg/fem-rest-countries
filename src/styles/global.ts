import { createGlobalStyle } from "styled-components";

import NunitoSansLight from "../assets/fonts/NunitoSans-Light.ttf";
import NunitoSansSemiBold from "../assets/fonts/NunitoSans-SemiBold.ttf";
import NunitoSansExtraBold from "../assets/fonts/NunitoSans-ExtraBold.ttf";

const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family: "Nunito Sans";
      src: url(${NunitoSansLight}) format('truetype');
      fontWeight: 300;
      font-style: normal;
    }

    @font-face {
        font-family: "Nunito Sans";
        src: url(${NunitoSansSemiBold}) format('truetype');
        font-weight: 600;
        font-style: normal;
    }

    @font-face {
        font-family: "Nunito Sans";
        src: url(${NunitoSansExtraBold}) format('truetype');
        font-weight: 800;
        font-style: normal;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      @media (max-width: 1080px) {
        font-size: 93.75%;
      }

      @media (max-width: 720px) {
        font-size: 87.5%;
      }
    }

    body {
      background-color: ${(props) => props.theme.palette.background};
      color: ${(props) => props.theme.palette.text};

      transition: background-color 150ms ease-in-out, color 150ms ease-in-out;
    };

    body, input, textarea, button {
      font-family: "Nunito Sans", 'sans-serif';
      -webkit-font-smoothing: antialiased;
    };

    h1, h2, h3, h4, h5, h6, strong {
      font-weight: 600;
    }

    a {
      all: unset;
    }

    button {
      cursor: "pointer";

      &[disabled] {
        opacity: 0.6;
        cursor: "not-allowed";
      }
    }
`;

export default GlobalStyle;
