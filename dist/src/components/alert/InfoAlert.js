"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const Flex_1 = require("../shared/Flex");
const Wrapper = (0, styled_components_1.default)(Flex_1.Flex) `
  position: absolute;
  top: 10px;
  height: 70px;
  width: 90%;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 13px 50px;
  box-sizing: border-box;
`;
const Message = styled_components_1.default.div `
  padding: 5px;
  font-size: 14px;
  color: #d84242;
  text-align: center;
`;
const InfoAlert = ({ message }) => {
    if (!message) {
        return null;
    }
    return (react_1.default.createElement(Wrapper, null,
        react_1.default.createElement(Message, null, message)));
};
exports.default = InfoAlert;
//# sourceMappingURL=InfoAlert.js.map