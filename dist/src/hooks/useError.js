"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useError = (alert) => {
    const [errorMessage, setErrorMessage] = (0, react_1.useState)();
    const displayError = (0, react_1.useCallback)((message) => {
        setErrorMessage(message);
    }, []);
    (0, react_1.useEffect)(() => {
        if ((alert === null || alert === void 0 ? void 0 : alert.code) === -1) {
            setErrorMessage('');
            return;
        }
        if (alert === null || alert === void 0 ? void 0 : alert.code) {
            displayError(`Error: ${alert.code}`);
        }
    }, [alert]);
    return errorMessage;
};
exports.default = useError;
//# sourceMappingURL=useError.js.map