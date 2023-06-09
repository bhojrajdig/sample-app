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
const react_1 = __importStar(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const Select = styled_components_1.default.select `
  padding-left: 10px;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #f1f4f9;
  width: 340px;
  height: 36px;
  color: #3e3c3c;
`;
const Option = styled_components_1.default.option `
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #3e3c3c;
`;
const SettingsDropDown = ({ options, onSelect }) => {
    const handleChange = (0, react_1.useCallback)((event) => onSelect(event.target.value), []);
    return (react_1.default.createElement(Select, { onChange: handleChange }, options === null || options === void 0 ? void 0 : options.map(({ value, name }) => (react_1.default.createElement(Option, { key: value, value: value }, name)))));
};
exports.default = SettingsDropDown;
//# sourceMappingURL=SettingsDropDown.js.map