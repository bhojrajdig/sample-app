"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoReadyState = exports.InfoType = exports.AppErrorCode = void 0;
var AppErrorCode;
(function (AppErrorCode) {
    AppErrorCode[AppErrorCode["MEASUREMENT_CODE_FACE_UNDETECTED_ERROR"] = 80001] = "MEASUREMENT_CODE_FACE_UNDETECTED_ERROR";
})(AppErrorCode = exports.AppErrorCode || (exports.AppErrorCode = {}));
var InfoType;
(function (InfoType) {
    InfoType[InfoType["NONE"] = 0] = "NONE";
    InfoType[InfoType["INSTRUCTION"] = 1] = "INSTRUCTION";
    InfoType[InfoType["SUCCESS"] = 2] = "SUCCESS";
})(InfoType = exports.InfoType || (exports.InfoType = {}));
var VideoReadyState;
(function (VideoReadyState) {
    VideoReadyState[VideoReadyState["HAVE_ENOUGH_DATA"] = 4] = "HAVE_ENOUGH_DATA";
})(VideoReadyState = exports.VideoReadyState || (exports.VideoReadyState = {}));
//# sourceMappingURL=types.js.map