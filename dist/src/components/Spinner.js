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
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importStar(require("styled-components"));
const no_stats_svg_1 = require("../assets/no-stats.svg");
const Flex_1 = require("./shared/Flex");
const media_1 = __importDefault(require("../style/media"));
const SpinnerAnimation = (0, styled_components_1.keyframes) `
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
`;
const Wrapper = (0, styled_components_1.default)(Flex_1.Flex) `
  width: fit-content;
  animation: ${SpinnerAnimation} 1.2s infinite;
  animation-timing-function: linear;
  opacity: 0.8;
  margin-top: 13px;
  ${media_1.default.tablet `
    margin-top: 0px;
    margin-right: 30px;
`}
`;
const Spinner = () => (react_1.default.createElement(Wrapper, null,
    react_1.default.createElement(no_stats_svg_1.ReactComponent, null)));
exports.default = Spinner;
//# sourceMappingURL=Spinner.js.map