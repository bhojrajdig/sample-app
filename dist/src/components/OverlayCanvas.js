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
const mirror_1 = require("../style/mirror");
const media_1 = __importDefault(require("../style/media"));
const Canvas = styled_components_1.default.canvas `
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${({ dim }) => dim ? 'rgba(0, 0, 0, 0.4)' : 'transparent'};
  ${media_1.default.tablet `
    background-color: transparent;
  `}
  ${mirror_1.mirror}
`;
const OverlayCanvas = ({ faceRect, width, height, isReport }) => {
    const canvasRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        const context = canvasRef.current.getContext('2d');
        context.clearRect(0, 0, width, height);
        if (!faceRect)
            return;
        context.strokeStyle = '#0653F4';
        context.lineWidth = 1;
        !isReport &&
            context.strokeRect(faceRect.x, faceRect.y, faceRect.width, faceRect.height);
    }, [faceRect, isReport]);
    return (react_1.default.createElement(Canvas, { width: width, height: height, ref: canvasRef, dim: isReport }));
};
exports.default = OverlayCanvas;
//# sourceMappingURL=OverlayCanvas.js.map