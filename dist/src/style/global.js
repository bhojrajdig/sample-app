"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const GlobalStyle = (0, styled_components_1.createGlobalStyle) `
  body {
    margin: 0;
    background: #f1f4f9;
    font-family: Rubik, Segoe UI, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body, #root {
    height: 100%
  }

  #root {
    -webkit-transform: translate3d(0, 0, 0);
  }

  input {
    font-family: Rubik, Segoe UI, sans-serif;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield; /* Firefox */
  }

  button {
    font-family: Rubik, Segoe UI, sans-serif;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }
`;
exports.default = GlobalStyle;
//# sourceMappingURL=global.js.map