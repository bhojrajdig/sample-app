"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMeasurementDuration = exports.useProductId = exports.useLicenseKey = exports.MAX_MEASUREMENT_DURATION = exports.MIN_MEASUREMENT_DURATION = exports.DEFAULT_MEASUREMENT_DURATION = void 0;
const use_local_storage_state_1 = require("use-local-storage-state");
exports.DEFAULT_MEASUREMENT_DURATION = 120;
exports.MIN_MEASUREMENT_DURATION = 20;
exports.MAX_MEASUREMENT_DURATION = 180;
exports.useLicenseKey = (0, use_local_storage_state_1.createLocalStorageStateHook)('licenseKey', '23695E-DDF5A5-49D5B8-81A974-716170-C8B268');
exports.useProductId = (0, use_local_storage_state_1.createLocalStorageStateHook)('productId', null);
exports.useMeasurementDuration = (0, use_local_storage_state_1.createLocalStorageStateHook)('measurementDuration', exports.DEFAULT_MEASUREMENT_DURATION);
//# sourceMappingURL=useLicenseDetails.js.map