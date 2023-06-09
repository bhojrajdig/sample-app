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
const FlexSpace_1 = require("./shared/FlexSpace");
const Timer_1 = __importDefault(require("./Timer"));
const styled_components_1 = __importDefault(require("styled-components"));
const media_1 = __importDefault(require("../style/media"));
const InfoContent = (0, styled_components_1.default)(FlexSpace_1.FlexSpace) `
  padding: 5px 5px;
  width: 100%;
  height: 25px;
  box-sizing: border-box;
  ${media_1.default.tablet `
    padding: 5px 1px;
  `}
`;
const LicenseInfo = styled_components_1.default.div `
  font-size: 16px;
  color: #01061b;
`;
const InfoBar = ({ isMeasuring, durationSeconds, showTimer, offlineMeasurements, }) => {
    const [timerId, setTimerId] = (0, react_1.useState)(null);
    const [measurementSecondsEnd, setMeasurementSecondsEnd] = (0, react_1.useState)(0);
    const measurementSecondsEndToDisplay = measurementSecondsEnd
        ? ' | ' + new Date(measurementSecondsEnd * 1000).toISOString().substr(14, 5)
        : ' | 00:00';
    (0, react_1.useEffect)(() => {
        setMeasurementSecondsEnd(offlineMeasurements === null || offlineMeasurements === void 0 ? void 0 : offlineMeasurements.measurementSecondsEnd);
    }, [offlineMeasurements === null || offlineMeasurements === void 0 ? void 0 : offlineMeasurements.measurementSecondsEnd]);
    (0, react_1.useEffect)(() => {
        if (timerId === null && measurementSecondsEnd > 0) {
            setTimerId(setInterval(() => {
                if (measurementSecondsEnd > 0) {
                    setMeasurementSecondsEnd((prev) => {
                        if (prev === 0) {
                            clearInterval(timerId);
                            return;
                        }
                        return prev - 1;
                    });
                }
            }, 1000));
        }
    }, [measurementSecondsEnd, setTimerId]);
    return (react_1.default.createElement(InfoContent, null,
        react_1.default.createElement(LicenseInfo, null,
            !isMeasuring && offlineMeasurements
                ? `License: ${offlineMeasurements.offlineMeasurementsRemaining}/${offlineMeasurements.offlineMeasurements}`
                : '',
            !isMeasuring && (offlineMeasurements === null || offlineMeasurements === void 0 ? void 0 : offlineMeasurements.measurementSecondsEnd)
                ? measurementSecondsEndToDisplay
                : ''),
        showTimer && (react_1.default.createElement(Timer_1.default, { started: isMeasuring, durationSeconds: durationSeconds }))));
};
exports.default = InfoBar;
//# sourceMappingURL=InfoBar.js.map