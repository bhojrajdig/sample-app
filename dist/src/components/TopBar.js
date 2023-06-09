"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const Logo_1 = __importDefault(require("./Logo"));
const SettingsButton_1 = __importDefault(require("./SettingsButton"));
const media_1 = __importDefault(require("../style/media"));
const Flex_1 = require("./shared/Flex");
const Wrapper = (0, styled_components_1.default)(Flex_1.Flex) `
  width: 100%;
  position: relative;
  justify-content: start;
  align-items: center;
  min-height: 60px;
  z-index: 2;
  box-shadow: 0 4px 7px rgba(0, 0, 0, 0.2);
  background: #01061b;
  ${media_1.default.tablet `
    padding-left: 100px;
`}
`;
const TopBar = ({ onSettingsClick, isMeasuring }) => {
    return (react_1.default.createElement(Wrapper, null,
        react_1.default.createElement(SettingsButton_1.default, { disable: isMeasuring, onClick: onSettingsClick }),
        react_1.default.createElement(Logo_1.default, null)));
};
exports.default = TopBar;
//# sourceMappingURL=TopBar.js.map