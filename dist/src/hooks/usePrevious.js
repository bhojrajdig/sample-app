"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const usePrevious = (value) => {
    const ref = (0, react_1.useRef)();
    (0, react_1.useEffect)(() => {
        ref.current = value;
    }, [value]);
    return ref.current;
};
exports.default = usePrevious;
//# sourceMappingURL=usePrevious.js.map