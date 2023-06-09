"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Flex_1 = require("./shared/Flex");
const styled_components_1 = __importDefault(require("styled-components"));
const LoadingWrapper = (0, styled_components_1.default)(Flex_1.Flex) `
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const Message = styled_components_1.default.h2 `
  font-size: 18px;
  color: #01061b;
  font-weight: normal;
`;
const Loader = () => (react_1.default.createElement(LoadingWrapper, null,
    react_1.default.createElement(Message, null, 'Loading...')));
exports.default = Loader;
//# sourceMappingURL=Loader.js.map