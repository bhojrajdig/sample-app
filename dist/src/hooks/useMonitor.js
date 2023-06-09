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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const web_sdk_1 = __importStar(require("@binah/web-sdk"));
const types_1 = require("../types");
const useMonitor = (video, cameraId, processingTime, licenseKey, productId, startMeasuring) => {
    var _a, _b, _c, _d, _e;
    const [session, setSession] = (0, react_1.useState)();
    const [sessionState, setSessionState] = (0, react_1.useState)();
    const [isMonitorReady, setIsMonitorReady] = (0, react_1.useState)();
    const [enabledVitalSigns, setEnabledVitalSigns] = (0, react_1.useState)();
    const [offlineMeasurements, setOfflineMeasurements] = (0, react_1.useState)();
    const [vitalSigns, setVitalSigns] = (0, react_1.useState)();
    const [error, setError] = (0, react_1.useState)({ code: -1 });
    const [warning, setWarning] = (0, react_1.useState)({ code: -1 });
    const [info, setInfo] = (0, react_1.useState)({ type: types_1.InfoType.NONE });
    const isDismissing = (0, react_1.useRef)(false);
    const setInfoWithDismiss = (0, react_1.useCallback)((info, seconds) => {
        if (!isDismissing.current) {
            setInfo(info);
            if (seconds) {
                isDismissing.current = true;
                setTimeout(() => {
                    setInfo({ type: types_1.InfoType.NONE });
                    isDismissing.current = false;
                }, seconds * 1000);
            }
        }
    }, [types_1.InfoType, setInfo, info, isDismissing, isDismissing.current]);
    const updateVitalSigns = (0, react_1.useCallback)((vitalSigns) => {
        setVitalSigns((prev) => (Object.assign(Object.assign({}, prev), vitalSigns)));
    }, []);
    const onVitalSign = (0, react_1.useCallback)((vitalSign) => {
        updateVitalSigns(vitalSign);
    }, []);
    const onFinalResults = (0, react_1.useCallback)((vitalSignsResults) => {
        updateVitalSigns(vitalSignsResults.results);
    }, []);
    const onError = (errorData) => {
        setError(errorData);
    };
    const onWarning = (warningData) => {
        if (warningData.code ===
            web_sdk_1.HealthMonitorCodes.MEASUREMENT_CODE_MISDETECTION_DURATION_EXCEEDS_LIMIT_WARNING) {
            setVitalSigns(null);
        }
        if (warningData.code ===
            web_sdk_1.HealthMonitorCodes.MEASUREMENT_CODE_UNSUPPORTED_ORIENTATION_WARNING) {
            setInfo({
                message: `Warning: ${warningData.code}`,
                type: types_1.InfoType.INSTRUCTION,
            });
        }
        else {
            setWarning(warningData);
        }
    };
    const onStateChange = (0, react_1.useCallback)((state) => {
        setSessionState(state);
        if (state === web_sdk_1.SessionState.MEASURING) {
            setVitalSigns(null);
        }
    }, []);
    const onEnabledVitalSigns = (0, react_1.useCallback)((vitalSigns) => {
        setEnabledVitalSigns(vitalSigns);
    }, []);
    const onOfflineMeasurement = (0, react_1.useCallback)((offlineMeasurements) => {
        setOfflineMeasurements(offlineMeasurements);
    }, []);
    const onActivation = (0, react_1.useCallback)((activationId) => {
    }, []);
    const onFaceDetected = (0, react_1.useCallback)((isRect) => {
        if (!isRect) {
            setInfo({
                type: types_1.InfoType.INSTRUCTION,
                message: 'Face not detected',
            });
        }
        else {
            setInfoWithDismiss({ type: types_1.InfoType.NONE });
        }
    }, []);
    (0, react_1.useEffect)(() => {
        (async () => {
            try {
                await web_sdk_1.default.initialize({
                    licenseKey,
                    licenseInfo: {
                        onEnabledVitalSigns,
                        onOfflineMeasurement,
                        onActivation,
                    },
                });
                console.log(`Initialized monitor`);
                setIsMonitorReady(true);
                setError({ code: -1 });
            }
            catch (e) {
                console.error('Error initializing HealthMonitor', e);
                setIsMonitorReady(false);
                setError({ code: e.errorCode });
            }
        })();
    }, [licenseKey, productId]);
    (0, react_1.useEffect)(() => {
        (async () => {
            try {
                if (!isMonitorReady || !processingTime || !video.current) {
                    return;
                }
                sessionState === web_sdk_1.SessionState.ACTIVE && session.terminate();
                const options = {
                    input: video.current,
                    cameraDeviceId: cameraId,
                    processingTime,
                    onFaceDetected,
                    onVitalSign,
                    onFinalResults,
                    onError,
                    onWarning,
                    onStateChange,
                    orientation: web_sdk_1.DeviceOrientation.PORTRAIT,
                };
                const faceSession = await web_sdk_1.default.createFaceSession(options);
                console.log(`Session created`);
                setSession(faceSession);
                setError({ code: -1 });
            }
            catch (e) {
                setError({ code: e.errorCode });
                console.error('Error creating a session', e);
            }
        })();
    }, [processingTime, isMonitorReady]);
    (0, react_1.useEffect)(() => {
        if (startMeasuring) {
            if (sessionState === web_sdk_1.SessionState.ACTIVE) {
                session.start();
                setError({ code: -1 });
            }
        }
        else {
            sessionState === web_sdk_1.SessionState.MEASURING && session.stop();
        }
    }, [startMeasuring]);
    return {
        sessionState,
        vitalSigns: {
            heartRate: {
                value: (_a = vitalSigns === null || vitalSigns === void 0 ? void 0 : vitalSigns.heartRate) === null || _a === void 0 ? void 0 : _a.value,
                isEnabled: enabledVitalSigns === null || enabledVitalSigns === void 0 ? void 0 : enabledVitalSigns.isEnabledHeartRate,
            },
            breathingRate: {
                value: (_b = vitalSigns === null || vitalSigns === void 0 ? void 0 : vitalSigns.breathingRate) === null || _b === void 0 ? void 0 : _b.value,
                isEnabled: enabledVitalSigns === null || enabledVitalSigns === void 0 ? void 0 : enabledVitalSigns.isEnabledBreathingRate,
            },
            stress: {
                value: (_c = vitalSigns === null || vitalSigns === void 0 ? void 0 : vitalSigns.stressLevel) === null || _c === void 0 ? void 0 : _c.value,
                isEnabled: enabledVitalSigns === null || enabledVitalSigns === void 0 ? void 0 : enabledVitalSigns.isEnabledStressLevel,
            },
            hrvSdnn: {
                value: (_d = vitalSigns === null || vitalSigns === void 0 ? void 0 : vitalSigns.sdnn) === null || _d === void 0 ? void 0 : _d.value,
                isEnabled: enabledVitalSigns === null || enabledVitalSigns === void 0 ? void 0 : enabledVitalSigns.isEnabledSdnn,
            },
            spo2: {
                value: null,
                isEnabled: false,
            },
            bloodPressure: {
                value: (_e = vitalSigns === null || vitalSigns === void 0 ? void 0 : vitalSigns.bloodPressure) === null || _e === void 0 ? void 0 : _e.value,
                isEnabled: enabledVitalSigns === null || enabledVitalSigns === void 0 ? void 0 : enabledVitalSigns.isEnabledBloodPressure,
            },
        },
        offlineMeasurements,
        error,
        warning,
        info,
    };
};
exports.default = useMonitor;
//# sourceMappingURL=useMonitor.js.map