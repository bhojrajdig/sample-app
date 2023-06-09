"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const FlexSpace_1 = require("./shared/FlexSpace");
const Box = (0, styled_components_1.default)(FlexSpace_1.FlexSpace) `
  flex-direction: column;
  align-items: center;
  gap: 5px;
  height: 40px;
`;
const Title = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  color: #01061b;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
`;
const Value = styled_components_1.default.div `
  font-size: 14px;
  color: #01061b;
  font-weight: 700;
`;
const ValueWrapper = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const StatsBox = ({ title, value }) => {
    return (react_1.default.createElement(Box, null,
        react_1.default.createElement(Title, null, title),
        react_1.default.createElement(ValueWrapper, null, value && react_1.default.createElement(Value, null, value))));
};
exports.default = StatsBox;
//# sourceMappingURL=StatsBox.js.map