"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useTimer = (started, durationSeconds) => {
    const [seconds, setSeconds] = (0, react_1.useState)(1);
    const [intervalId, setIntervalId] = (0, react_1.useState)(0);
    (0, react_1.useEffect)(() => {
        if (started) {
            setSeconds(1);
            const intervalId = setInterval(() => {
                setSeconds((seconds) => {
                    if (seconds == durationSeconds - 1) {
                        clearInterval(intervalId);
                    }
                    return seconds + 1;
                });
            }, 1000);
            setIntervalId(intervalId);
        }
        else {
            clearInterval(intervalId);
        }
    }, [started]);
    return seconds;
};
exports.default = useTimer;
//# sourceMappingURL=useTimer.js.map