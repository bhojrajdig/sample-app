"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWarning = exports.useTimer = exports.usePrevious = exports.usePageVisibility = exports.useMonitor = exports.useMeasurementDuration = exports.useProductId = exports.useLicenseKey = exports.useDisableZoom = exports.useCameras = exports.useError = void 0;
const useError_1 = __importDefault(require("./useError"));
exports.useError = useError_1.default;
const useCameras_1 = __importDefault(require("./useCameras"));
exports.useCameras = useCameras_1.default;
const useDisableZoom_1 = __importDefault(require("./useDisableZoom"));
exports.useDisableZoom = useDisableZoom_1.default;
const useLicenseDetails_1 = require("./useLicenseDetails");
Object.defineProperty(exports, "useLicenseKey", { enumerable: true, get: function () { return useLicenseDetails_1.useLicenseKey; } });
Object.defineProperty(exports, "useProductId", { enumerable: true, get: function () { return useLicenseDetails_1.useProductId; } });
Object.defineProperty(exports, "useMeasurementDuration", { enumerable: true, get: function () { return useLicenseDetails_1.useMeasurementDuration; } });
const useMonitor_1 = __importDefault(require("./useMonitor"));
exports.useMonitor = useMonitor_1.default;
const usePageVisibility_1 = __importDefault(require("./usePageVisibility"));
exports.usePageVisibility = usePageVisibility_1.default;
const usePrevious_1 = __importDefault(require("./usePrevious"));
exports.usePrevious = usePrevious_1.default;
const useTimer_1 = __importDefault(require("./useTimer"));
exports.useTimer = useTimer_1.default;
const useWarning_1 = __importDefault(require("./useWarning"));
exports.useWarning = useWarning_1.default;
//# sourceMappingURL=index.js.map