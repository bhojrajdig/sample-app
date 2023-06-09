"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const react_1 = __importDefault(require("react"));
const PasswordInput_1 = __importDefault(require("./PasswordInput"));
const Wrapper = styled_components_1.default.div ``;
const Title = styled_components_1.default.h3 `
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #3e3c3c;
  margin-bottom: 6px;
`;
const Input = styled_components_1.default.input `
  padding-left: 10px;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #f1f4f9;
  width: 340px;
  height: 36px;
  color: #3e3c3c;
  border: 1px solid #000000;

  &:focus {
    border-width: 2px;
    outline: ${({ inValid }) => (inValid ? 'none' : '')};
    border-color: ${({ inValid }) => (inValid ? '#d80000' : '#000000')};
  }
`;
const SettingsItem = ({ title, onChange, onBlur, type, value, isValid = true, }) => {
    return (react_1.default.createElement(Wrapper, null,
        react_1.default.createElement(Title, null, title),
        type === 'password' ? (react_1.default.createElement(PasswordInput_1.default, { onChange: onChange, onBlur: onBlur, value: value, isValid: isValid })) : (react_1.default.createElement(Input, { type: type, onChange: onChange, onBlur: onBlur, value: value, inValid: !isValid }))));
};
exports.default = SettingsItem;
//# sourceMappingURL=SettingsItem.js.map