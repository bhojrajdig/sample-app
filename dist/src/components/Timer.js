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
const hooks_1 = require("../hooks");
const media_1 = __importDefault(require("../style/media"));
const react_media_hook_1 = require("react-media-hook");
const Value = styled_components_1.default.div `
  font-size: 16px;
  color: #01061b;
  ${media_1.default.tablet `
    color: #0653f4;
    font-size: 24px;
 `}
`;
const Timer = ({ started, durationSeconds }) => {
    const isMediaTablet = (0, react_media_hook_1.useMediaPredicate)('(min-width: 1000px)');
    const seconds = (0, hooks_1.useTimer)(started, durationSeconds);
    const formatMinutes = (0, react_1.useCallback)((seconds) => ('0' + Math.floor(seconds / 60)).slice(-2), [seconds]);
    const formatSeconds = (0, react_1.useCallback)((seconds) => ('0' + (seconds % 60)).slice(-2), [seconds]);
    return (react_1.default.createElement(Value, null,
        !isMediaTablet && 'Duration: ',
        formatMinutes(seconds),
        ":",
        formatSeconds(seconds)));
};
exports.default = Timer;
//# sourceMappingURL=Timer.js.map