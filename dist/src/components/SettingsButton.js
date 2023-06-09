"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const settings_hamburger_svg_1 = __importDefault(require("../assets/settings-hamburger.svg"));
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const Img = styled_components_1.default.img `
  height: 17px;
  width: 22px;
  margin: 0 8px;
  padding: 13px;
  visibility: ${({ disable }) => disable && 'hidden'};
`;
const SettingsButton = ({ onClick, disable }) => {
    return (react_1.default.createElement(Img, { id: "settingsButton", disable: disable, src: settings_hamburger_svg_1.default, onClick: onClick }));
};
exports.default = SettingsButton;
//# sourceMappingURL=SettingsButton.js.map