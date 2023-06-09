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
const CloseButton_1 = __importDefault(require("./shared/CloseButton"));
const SettingsDropDown_1 = __importDefault(require("./SettingsDropDown"));
const SettingsItem_1 = __importDefault(require("./SettingsItem"));
const Flex_1 = require("./shared/Flex");
const media_1 = __importDefault(require("../style/media"));
const useLicenseDetails_1 = require("../hooks/useLicenseDetails");
const package_json_1 = require("../../package.json");
const SideBar = (0, styled_components_1.default)(Flex_1.Flex) `
  position: absolute;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  background-color: #f1f4f9;
  overflow: hidden;
  z-index: 1;
  animation-name: ${({ reverseAnimation }) => reverseAnimation ? 'slide-reverse' : 'slide'};
  animation-duration: 0.3s;
  @keyframes slide {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
  @keyframes slide-reverse {
    from {
      width: 100%;
    }
    to {
      width: 0;
    }
  }
  ${media_1.default.tablet `
    width: 400px;
    box-shadow: 2px 1px 5px rgba(0, 0, 0, 0.1);
    @keyframes slide {
      from {
        width: 0;
      }
      to {
        width: 400px;
      }
    }
    @keyframes slide-reverse {
      from {
        width: 400px;
      }
      to {
        width: 0;
      }
    }
`}
`;
const Wrapper = (0, styled_components_1.default)(Flex_1.Flex) `
  flex-direction: column;
  margin-top: 80px;
  width: 340px;
  box-sizing: border-box;
`;
const CloseWrapper = (0, styled_components_1.default)(Flex_1.Flex) `
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-bottom: 15px;
`;
const CameraDropDown = styled_components_1.default.div `
  display: none;
  ${media_1.default.tablet `
    margin-top: 15px;
    display: block;
  `}
`;
const Title = styled_components_1.default.h3 `
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #3e3c3c;
  margin-bottom: 6px;
`;
const MeasurementDurationWrapper = styled_components_1.default.div `
  margin-top: 15px;
`;
const LicenseStatus = styled_components_1.default.h3 `
  margin-top: 6px;
  margin-bottom: 0;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
`;
const TextBold = styled_components_1.default.span `
  font-weight: bold;
`;
const Version = styled_components_1.default.div `
  font-size: 14px;
  color: #3e3c3c;
`;
const ResetLinkActive = styled_components_1.default.a `
  margin-top: 18px;
  cursor: pointer;
  color: #0653f4;
  font-size: 14px;
`;
const ResetLinkDisabled = styled_components_1.default.a `
  margin-top: 18px;
  cursor: none;
  color: #9fa2a6;
  font-size: 14px;
`;
const HelpBlock = styled_components_1.default.div `
  color: #d80000;
  font-size: 12px;
  line-height: 14px;
  margin-top: 5px;
  margin-left: 2px;
`;
const SettingsBars = ({ open, onClose, cameras, isLicenseValid }) => {
    const [processingTimeInLocalStorage, setProcessingTimeInLocalStorage,] = (0, useLicenseDetails_1.useMeasurementDuration)();
    const [licenseKeyInLocalStorage, setLicenseKeyInLocalStorage,] = (0, useLicenseDetails_1.useLicenseKey)();
    const [cameraId, setCameraId] = (0, react_1.useState)();
    const [processingTime, setProcessingTime] = (0, react_1.useState)(processingTimeInLocalStorage);
    const [isProcessingTimeValid, setIsProcessingTimeValid] = (0, react_1.useState)(true);
    const [licenseKey, setLicenseKey] = (0, react_1.useState)(licenseKeyInLocalStorage);
    const [isClosing, setIsClosing] = (0, react_1.useState)();
    const [isResetClickable, setIsResetClickable] = (0, react_1.useState)(false);
    const mapCamerasToDropDown = (0, react_1.useCallback)((cameras) => cameras === null || cameras === void 0 ? void 0 : cameras.map(({ deviceId, label }) => ({ value: deviceId, name: label })), []);
    const handleCameraSelected = (0, react_1.useCallback)((cameraId) => {
        setCameraId(cameraId);
    }, []);
    const handleClose = (0, react_1.useCallback)(() => {
        if (!isProcessingTimeValid) {
            return;
        }
        setIsClosing(true);
        setTimeout(() => {
            onClose({ cameraId });
            setIsClosing(false);
        }, 200);
    }, [cameraId, isProcessingTimeValid]);
    const onProcessingTimeChange = (0, react_1.useCallback)((event) => {
        const processingTime = event.target.value;
        setProcessingTime(processingTime);
        setIsProcessingTimeValid(processingTime >= useLicenseDetails_1.MIN_MEASUREMENT_DURATION &&
            processingTime <= useLicenseDetails_1.MAX_MEASUREMENT_DURATION);
        setIsResetClickable(true);
    }, []);
    const onProcessingTimeBlur = (0, react_1.useCallback)((event) => {
        setProcessingTimeInLocalStorage(event.target.value);
    }, []);
    const onLicenseKeyChange = (0, react_1.useCallback)((event) => {
        setLicenseKey(event.target.value);
        setIsResetClickable(true);
    }, []);
    const onLicenseKeyBlur = (0, react_1.useCallback)((event) => {
        setLicenseKeyInLocalStorage(event.target.value);
    }, []);
    const onResetSettingsValues = (0, react_1.useCallback)(() => {
        setProcessingTime(useLicenseDetails_1.DEFAULT_MEASUREMENT_DURATION);
        setProcessingTimeInLocalStorage(useLicenseDetails_1.DEFAULT_MEASUREMENT_DURATION);
        setIsProcessingTimeValid(true);
        setLicenseKey('');
        setLicenseKeyInLocalStorage('');
        setIsResetClickable(false);
    }, []);
    (0, react_1.useEffect)(() => {
        (cameras === null || cameras === void 0 ? void 0 : cameras.length) && setCameraId(cameras[0].deviceId);
    }, [cameras]);
    return (react_1.default.createElement("div", { id: "settingsBars" }, open && (react_1.default.createElement(SideBar, { reverseAnimation: !!isClosing },
        react_1.default.createElement(Wrapper, null,
            react_1.default.createElement(CloseWrapper, null,
                react_1.default.createElement(CloseButton_1.default, { onClick: handleClose })),
            react_1.default.createElement(Version, null,
                "Version: ",
                package_json_1.version.replace('-', '(').concat(')')),
            react_1.default.createElement(SettingsItem_1.default, { title: 'License Key', type: 'password', value: licenseKey, onChange: onLicenseKeyChange, onBlur: onLicenseKeyBlur, isValid: isLicenseValid }),
            react_1.default.createElement(LicenseStatus, null,
                "License Status:",
                react_1.default.createElement(TextBold, null, licenseKey && isLicenseValid ? ' Valid' : ' Invalid')),
            react_1.default.createElement(MeasurementDurationWrapper, null,
                react_1.default.createElement(SettingsItem_1.default, { title: 'Measurement Duration', type: 'number', value: processingTime, onChange: onProcessingTimeChange, onBlur: onProcessingTimeBlur, isValid: isProcessingTimeValid })),
            !isProcessingTimeValid && (react_1.default.createElement(HelpBlock, null, "Valid range: 20-180")),
            react_1.default.createElement(CameraDropDown, null,
                react_1.default.createElement(Title, null, "Camera"),
                react_1.default.createElement(SettingsDropDown_1.default, { onSelect: handleCameraSelected, options: mapCamerasToDropDown(cameras) })),
            isResetClickable ? (react_1.default.createElement(ResetLinkActive, { onClick: onResetSettingsValues }, "Reset Settings Values")) : (react_1.default.createElement(ResetLinkDisabled, { onClick: onResetSettingsValues }, "Reset Settings Values")))))));
};
exports.default = SettingsBars;
//# sourceMappingURL=SettingsBars.js.map