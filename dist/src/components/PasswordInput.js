"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const react_1 = __importStar(require("react"));
const visibility_svg_1 = __importDefault(require("../assets/visibility.svg"));
const Container = styled_components_1.default.div `
  display: flex;
  position: relative;
  align-items: center;
  width: 340px;
  height: 36px;
`;
const Input = styled_components_1.default.input `
  padding-left: 10px;
  padding-right: 35px;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #f1f4f9;
  width: inherit;
  height: inherit;
  color: #3e3c3c;
  border: 1px solid #000000;

  &:focus {
    border-width: 2px;
    outline: ${({ inValid }) => (inValid ? 'none' : '')};
    border-color: ${({ inValid }) => (inValid ? '#d80000' : '#000000')};
  }
`;
const ImageWrapper = styled_components_1.default.div `
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  right: 0;
  padding: 0 10px;
  height: inherit;
`;
const PasswordInput = ({ onChange, onBlur, value, isValid = true }) => {
    const [showPassword, setShowPassword] = (0, react_1.useState)(false);
    return (react_1.default.createElement(Container, null,
        react_1.default.createElement(Input, { type: showPassword ? 'string' : 'password', onChange: onChange, onBlur: onBlur, value: value, inValid: !isValid }),
        react_1.default.createElement(ImageWrapper, { onClick: () => setShowPassword(!showPassword) },
            react_1.default.createElement("img", { src: visibility_svg_1.default, alt: "" }))));
};
exports.default = PasswordInput;
//# sourceMappingURL=PasswordInput.js.map