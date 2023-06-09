"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useCameras = () => {
    const [cameras, setCameras] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        (async () => {
            const devices = await navigator.mediaDevices.enumerateDevices();
            const videoDevices = devices.filter((device) => device.kind === 'videoinput');
            videoDevices && setCameras(videoDevices);
        })();
    }, []);
    return cameras;
};
exports.default = useCameras;
//# sourceMappingURL=useCameras.js.map