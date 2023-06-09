"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const logo_svg_1 = __importDefault(require("../assets/logo.svg"));
const Img = styled_components_1.default.img `
  height: 45px;
  padding-top: 9px;
  pointer-events: none;
`;
const Logo = () => {
    return react_1.default.createElement(Img, { src: logo_svg_1.default });
};
exports.default = Logo;
//# sourceMappingURL=Logo.js.map