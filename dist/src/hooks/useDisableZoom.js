"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useDisableZoom = () => {
    const preventDefaultHandler = (0, react_1.useCallback)((e) => e.preventDefault(), []);
    (0, react_1.useEffect)(() => {
        document.addEventListener('gesturestart', preventDefaultHandler);
        document.addEventListener('gesturechange', preventDefaultHandler);
        window.addEventListener('gestureend', preventDefaultHandler);
        return () => {
            window.removeEventListener('gesturestart', preventDefaultHandler);
            window.removeEventListener('gesturechange', preventDefaultHandler);
            window.removeEventListener('gestureend', preventDefaultHandler);
        };
    }, []);
};
exports.default = useDisableZoom;
//# sourceMappingURL=useDisableZoom.js.map