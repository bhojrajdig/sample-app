"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const play_big_svg_1 = __importDefault(require("../assets/play-big.svg"));
const stop_svg_1 = __importDefault(require("../assets/stop.svg"));
const media_1 = __importDefault(require("../style/media"));
const Spinner_1 = __importDefault(require("./Spinner"));
const Container = styled_components_1.default.div `
  display: flex;
  justify-content: center;
  align-items: center;
  height: 58px;
  width: 58px;
  ${media_1.default.tablet `
    height: 88px;
    width: 88px;
  `}
`;
const Button = styled_components_1.default.div `
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #01061b;
  border-radius: 50%;
  cursor: pointer;
  height: inherit;
  width: inherit;
`;
const Icon = styled_components_1.default.img `
  width: 100%;
  padding: 52px;
  ${media_1.default.tablet `
    padding: 32px;
  `}
`;
const StartButton = ({ isLoading, onClick, isMeasuring }) => {
    return (react_1.default.createElement(Container, null, isLoading ? (react_1.default.createElement(Spinner_1.default, null)) : (react_1.default.createElement(Button, { onClick: onClick },
        react_1.default.createElement(Icon, { src: isMeasuring ? stop_svg_1.default : play_big_svg_1.default })))));
};
exports.default = StartButton;
//# sourceMappingURL=StartButton.js.map