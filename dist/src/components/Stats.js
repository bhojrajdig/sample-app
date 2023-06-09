"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const StatsBox_1 = __importDefault(require("./StatsBox"));
const Flex_1 = require("./shared/Flex");
const web_sdk_1 = require("@binah/web-sdk");
const Wrapper = (0, styled_components_1.default)(Flex_1.Flex) `
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 3px;
  padding: 13px 50px;
  bottom: 30px;
  box-sizing: border-box;
`;
const BoxesWrapper = (0, styled_components_1.default)(Flex_1.Flex) `
  gap: 30px;
`;
const Stats = ({ vitalSigns }) => {
    var _a, _b;
    const bloodPressureToDisplay = ((_a = vitalSigns.bloodPressure.value) === null || _a === void 0 ? void 0 : _a.systolic) &&
        ((_b = vitalSigns.bloodPressure.value) === null || _b === void 0 ? void 0 : _b.diastolic)
        ? vitalSigns.bloodPressure.value.systolic +
            '/' +
            vitalSigns.bloodPressure.value.diastolic
        : '--';
    return (react_1.default.createElement(Wrapper, null,
        react_1.default.createElement(BoxesWrapper, null,
            react_1.default.createElement(StatsBox_1.default, { title: 'HR', value: vitalSigns.heartRate.isEnabled
                    ? vitalSigns.heartRate.value || '--'
                    : 'N/A' }),
            react_1.default.createElement(StatsBox_1.default, { title: 'BR', value: vitalSigns.breathingRate.isEnabled
                    ? vitalSigns.breathingRate.value || '--'
                    : 'N/A' }),
            react_1.default.createElement(StatsBox_1.default, { title: 'SL', value: vitalSigns.stress.isEnabled
                    ? vitalSigns.stress.value || '--'
                    : 'N/A' }),
            react_1.default.createElement(StatsBox_1.default, { title: 'SDNN', value: vitalSigns.hrvSdnn.isEnabled
                    ? vitalSigns.hrvSdnn.value || '--'
                    : 'N/A' }),
            (0, web_sdk_1.isMobile)() && (react_1.default.createElement(StatsBox_1.default, { title: 'BP', value: vitalSigns.bloodPressure.isEnabled
                    ? bloodPressureToDisplay
                    : 'N/A' })))));
};
exports.default = Stats;
//# sourceMappingURL=Stats.js.map