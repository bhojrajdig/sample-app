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
const BinahMonitor_1 = __importDefault(require("./BinahMonitor"));
const SettingsBars_1 = __importDefault(require("./SettingsBars"));
const Flex_1 = require("./shared/Flex");
const hooks_1 = require("../hooks");
const ua_parser_js_1 = __importDefault(require("ua-parser-js"));
const Container = (0, styled_components_1.default)(Flex_1.Flex) `
  height: 100%;
  width: 100%;
  position: relative;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: ${({ isSettingsOpen }) => isSettingsOpen && 'rgba(0, 0, 0, 0.5)'};
`;
const App = () => {
    const cameras = (0, hooks_1.useCameras)();
    const [isSettingsOpen, setIsSettingsOpen] = (0, react_1.useState)(false);
    const [cameraId, setCameraId] = (0, react_1.useState)();
    const [isLicenseValid, setIsLicenseValid] = (0, react_1.useState)(false);
    const [isMobile] = (0, react_1.useState)((0, ua_parser_js_1.default)(navigator.userAgent).device.type === 'mobile');
    (0, hooks_1.useDisableZoom)();
    const onSettingsClickedHandler = (0, react_1.useCallback)((event) => {
        const settingsBars = document.getElementById('settingsBars');
        const isSettingsButtonClicked = event.target.id === 'settingsButton';
        const isInsideSettingsClicked = settingsBars.contains(event.target) || isSettingsButtonClicked;
        if (!isInsideSettingsClicked) {
            setIsSettingsOpen(false);
        }
    }, []);
    (0, react_1.useEffect)(() => {
        document.addEventListener('click', onSettingsClickedHandler);
        return () => {
            document.removeEventListener('click', onSettingsClickedHandler);
        };
    }, []);
    const updateLicenseStatus = (0, react_1.useCallback)((valid) => {
        setIsLicenseValid(valid);
    }, []);
    const toggleSettingsClick = (0, react_1.useCallback)(() => {
        setIsSettingsOpen(!isSettingsOpen);
    }, [isSettingsOpen]);
    const handleCloseSettings = (0, react_1.useCallback)(({ cameraId }) => {
        setCameraId(cameraId);
        setIsSettingsOpen(false);
    }, []);
    (0, react_1.useEffect)(() => {
        if (!(cameras === null || cameras === void 0 ? void 0 : cameras.length))
            return;
        setCameraId(cameras[0].deviceId);
    }, [cameras]);
    return (react_1.default.createElement(Container, { isSettingsOpen: isSettingsOpen },
        react_1.default.createElement(BinahMonitor_1.default, { showMonitor: !(isMobile && isSettingsOpen), cameraId: cameraId, onLicenseStatus: updateLicenseStatus, onSettingsClick: toggleSettingsClick, isSettingsOpen: isSettingsOpen }),
        react_1.default.createElement(SettingsBars_1.default, { open: isSettingsOpen, onClose: handleCloseSettings, cameras: cameras, isLicenseValid: isLicenseValid })));
};
exports.default = App;
//# sourceMappingURL=App.js.map