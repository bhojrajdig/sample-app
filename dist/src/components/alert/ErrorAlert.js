"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const Flex_1 = require("../shared/Flex");
const error_icon_svg_1 = __importDefault(require("../../assets/error-icon.svg"));
const Wrapper = (0, styled_components_1.default)(Flex_1.Flex) `
  position: absolute;
  bottom: 0;
  height: 120px;
  width: 100%;
  justify-content: start;
  align-items: center;
  background-color: white;
`;
const Message = styled_components_1.default.div `
  padding: 0 20px 0 10px;
  font-size: 14px;
  color: #231f20;
  text-align: left;
`;
const Icon = styled_components_1.default.img `
  margin-left: 30px;
`;
const ErrorAlert = ({ message }) => {
    if (!message) {
        return null;
    }
    return (react_1.default.createElement(Wrapper, null,
        react_1.default.createElement(Icon, { src: error_icon_svg_1.default }),
        react_1.default.createElement(Message, null, message)));
};
exports.default = ErrorAlert;
//# sourceMappingURL=ErrorAlert.js.map