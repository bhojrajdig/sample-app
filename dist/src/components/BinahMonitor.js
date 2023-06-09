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
const web_sdk_1 = require("@binah/web-sdk");
const react_media_hook_1 = require("react-media-hook");
const hooks_1 = require("../hooks");
const Stats_1 = __importDefault(require("./Stats"));
const StartButton_1 = __importDefault(require("./StartButton"));
const mirror_1 = require("../style/mirror");
const Flex_1 = require("./shared/Flex");
const Timer_1 = __importDefault(require("./Timer"));
const media_1 = __importDefault(require("../style/media"));
const InfoBar_1 = __importDefault(require("./InfoBar"));
const alert_1 = require("./alert");
const Loader_1 = __importDefault(require("./Loader"));
const types_1 = require("../types");
const TopBar_1 = __importDefault(require("./TopBar"));
const mask_svg_1 = __importDefault(require("../assets/mask.svg"));
const MonitorWrapper = (0, styled_components_1.default)(Flex_1.Flex) `
  flex-direction: column;
  width: 100%;
  justify-content: start;
  align-items: center;
  flex: 1;
  z-index: ${({ isSettingsOpen }) => isSettingsOpen && '-1'};
  ${media_1.default.tablet `
    width: fit-content;
    justify-content: center;
  `}
`;
const MeasurementContentWrapper = (0, styled_components_1.default)(Flex_1.Flex) `
  width: auto;
  height: ${({ isMobile }) => isMobile && '100%'};
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  ${media_1.default.mobile `
    margin: 40px 0 60px 0;
  `}
`;
const VideoAndStatsWrapper = (0, styled_components_1.default)(Flex_1.Flex) `
  position: relative;
  justify-content: center;
  width: 100%;
  height: ${({ isMobile }) => isMobile && '100%'};
  ${media_1.default.tablet `
    width: 812px;
    height: 609px;
  `} ${media_1.default.wide `
    width: 1016px;
    height: 762px;
  `};
`;
const VideoWrapper = styled_components_1.default.div `
  width: 100%;
  height: 100%;
  z-index: -1;
`;
const Img = styled_components_1.default.img `
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  object-fit: ${({ isDesktop }) => (isDesktop ? 'contain' : 'cover')};
`;
const Video = styled_components_1.default.video `
  width: 100%;
  height: 100%;
  object-fit: ${() => ((0, web_sdk_1.isIos)() ? 'unset' : (0, web_sdk_1.isMobile)() ? 'cover' : 'contain')};
  ${mirror_1.mirror}
`;
const ButtonWrapper = (0, styled_components_1.default)(Flex_1.Flex) `
  flex: 2;
  z-index: 3;
  width: 100%;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin-top: -30px;
  ${media_1.default.mobile `
    margin-top: 50px;
  `}
  ${media_1.default.tablet `
  padding: 0;
  height: auto;
  width: auto;
  position: absolute;
  right: 0;
  bottom: 42%;
  margin-right: 60px;
`}
`;
const ButtomTimerWrapper = (0, styled_components_1.default)(Flex_1.Flex) `
  display: none;
  ${media_1.default.tablet `
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    height: 30px;
    display: flex;
  `}
`;
const InfoBarWrapper = styled_components_1.default.div `
  height: 25px;
  width: 100%;
  display: flex;
  align-items: flex-end;
  ${media_1.default.mobile `
    flex: 0.45;
  `}
`;
const BinahMonitor = ({ showMonitor, cameraId, onLicenseStatus, onSettingsClick, isSettingsOpen, }) => {
    if (!showMonitor) {
        return null;
    }
    const video = (0, react_1.useRef)(null);
    const [isMeasurementEnabled, setIsMeasurementEnabled] = (0, react_1.useState)(false);
    const [startMeasuring, setStartMeasuring] = (0, react_1.useState)(false);
    const [isLoading, setIsLoading] = (0, react_1.useState)(false);
    const [loadingTimeoutPromise, setLoadingTimeoutPromise] = (0, react_1.useState)();
    const isPageVisible = (0, hooks_1.usePageVisibility)();
    const isMediaTablet = (0, react_media_hook_1.useMediaPredicate)('(min-width: 1000px)');
    const [processingTime] = (0, hooks_1.useMeasurementDuration)();
    const [licenseKey] = (0, hooks_1.useLicenseKey)();
    const { sessionState, vitalSigns, offlineMeasurements, error, warning, info, } = (0, hooks_1.useMonitor)(video, cameraId, processingTime, licenseKey, null, startMeasuring);
    const prevSessionState = (0, hooks_1.usePrevious)(sessionState);
    const errorMessage = (0, hooks_1.useError)(error);
    const warningMessage = (0, hooks_1.useWarning)(warning);
    const isMeasuring = (0, react_1.useCallback)(() => sessionState === web_sdk_1.SessionState.MEASURING, [sessionState]);
    const isVideoReady = (0, react_1.useCallback)(() => { var _a; return ((_a = video.current) === null || _a === void 0 ? void 0 : _a.readyState) === types_1.VideoReadyState.HAVE_ENOUGH_DATA; }, []);
    const handleButtonClick = (0, react_1.useCallback)(() => {
        setIsLoading(true);
        if (sessionState === web_sdk_1.SessionState.ACTIVE) {
            setStartMeasuring(true);
            setLoadingTimeoutPromise(window.setTimeout(() => setIsLoading(true), processingTime * 1000));
        }
        else if (isMeasuring()) {
            clearTimeout(loadingTimeoutPromise);
            setStartMeasuring(false);
        }
    }, [sessionState, setIsLoading, processingTime]);
    (0, react_1.useEffect)(() => {
        if (isMeasuring()) {
            setIsLoading(false);
            if (errorMessage) {
                setIsMeasurementEnabled(false);
            }
            else {
                setIsMeasurementEnabled(true);
            }
            !isPageVisible && setStartMeasuring(false);
        }
        else if ((sessionState === web_sdk_1.SessionState.ACTIVE ||
            sessionState === web_sdk_1.SessionState.TERMINATED) &&
            errorMessage) {
            setIsMeasurementEnabled(false);
        }
        if (sessionState === web_sdk_1.SessionState.ACTIVE &&
            prevSessionState !== sessionState) {
            setStartMeasuring(false);
            setIsLoading(false);
        }
    }, [errorMessage, sessionState, isPageVisible]);
    (0, react_1.useEffect)(() => {
        onLicenseStatus(!((error === null || error === void 0 ? void 0 : error.code) in web_sdk_1.HealthMonitorCodes));
    }, [error]);
    const mobile = (0, react_1.useMemo)(() => (0, web_sdk_1.isMobile)(), []);
    const desktop = (0, react_1.useMemo)(() => !(0, web_sdk_1.isTablet)() && !(0, web_sdk_1.isMobile)(), []);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(TopBar_1.default, { onSettingsClick: onSettingsClick, isMeasuring: isMeasuring() }),
        react_1.default.createElement(MonitorWrapper, { isSettingsOpen: isSettingsOpen },
            react_1.default.createElement(MeasurementContentWrapper, { isMobile: mobile },
                react_1.default.createElement(InfoBarWrapper, null,
                    react_1.default.createElement(InfoBar_1.default, { showTimer: isMeasurementEnabled && !isMediaTablet, isMeasuring: isMeasuring(), durationSeconds: processingTime, offlineMeasurements: offlineMeasurements })),
                react_1.default.createElement(VideoAndStatsWrapper, { isMobile: mobile },
                    react_1.default.createElement(VideoWrapper, null,
                        react_1.default.createElement(Img, { src: mask_svg_1.default, isDesktop: desktop }),
                        react_1.default.createElement(Video, { ref: video, id: "video", muted: true, playsInline: true, isMobile: (0, web_sdk_1.isMobile)() })),
                    (isMeasuring()
                        ? !errorMessage && !warningMessage
                        : !errorMessage) &&
                        isMeasurementEnabled && react_1.default.createElement(Stats_1.default, { vitalSigns: vitalSigns }),
                    react_1.default.createElement(alert_1.ErrorAlert, { message: errorMessage }),
                    isMeasuring() && react_1.default.createElement(alert_1.WarningAlert, { message: warningMessage }),
                    isMeasuring() && react_1.default.createElement(alert_1.InfoAlert, { message: info.message }),
                    !isVideoReady() && licenseKey && react_1.default.createElement(Loader_1.default, null)),
                react_1.default.createElement(ButtomTimerWrapper, null, isMeasurementEnabled && (react_1.default.createElement(Timer_1.default, { started: isMeasuring(), durationSeconds: processingTime }))),
                react_1.default.createElement(ButtonWrapper, null,
                    react_1.default.createElement(StartButton_1.default, { isLoading: isLoading, isMeasuring: isMeasuring(), onClick: handleButtonClick }))))));
};
exports.default = BinahMonitor;
//# sourceMappingURL=BinahMonitor.js.map