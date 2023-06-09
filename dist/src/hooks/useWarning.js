"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useWarning = (alert) => {
    const [warningMessage, setWarningMessage] = (0, react_1.useState)();
    const startDismissTimeout = (0, react_1.useCallback)((seconds) => {
        setTimeout(() => {
            setWarningMessage('');
        }, seconds * 1000);
    }, []);
    const displayWarning = (0, react_1.useCallback)((message) => {
        setWarningMessage(message);
        startDismissTimeout(4);
    }, []);
    (0, react_1.useEffect)(() => {
        if ((alert === null || alert === void 0 ? void 0 : alert.code) === -1) {
            setWarningMessage('');
            return;
        }
        if (alert === null || alert === void 0 ? void 0 : alert.code) {
            displayWarning(`Warning: ${alert.code}`);
        }
    }, [alert]);
    return warningMessage;
};
exports.default = useWarning;
//# sourceMappingURL=useWarning.js.map