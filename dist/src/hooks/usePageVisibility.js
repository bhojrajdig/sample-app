"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const usePageVisibility = () => {
    const [visible, setVisible] = (0, react_1.useState)(true);
    (0, react_1.useEffect)(() => {
        const focused = () => {
            if (!visible) {
                setVisible(true);
            }
        };
        const unfocused = () => {
            if (visible) {
                setVisible(false);
            }
        };
        if ('hidden' in document) {
            setVisible(!document.hidden);
            document.addEventListener('visibilitychange', function () {
                (document.hidden ? unfocused : focused)();
            });
        }
        if ('mozHidden' in document) {
            setVisible(!document['mozHidden']);
            document.addEventListener('mozvisibilitychange', function () {
                (document['mozHidden'] ? unfocused : focused)();
            });
        }
        if ('webkitHidden' in document) {
            setVisible(!document['webkitHidden']);
            document.addEventListener('webkitvisibilitychange', function () {
                (document['webkitHidden'] ? unfocused : focused)();
            });
        }
        if ('msHidden' in document) {
            setVisible(!document['msHidden']);
            document.addEventListener('msvisibilitychange', function () {
                (document['msHidden'] ? unfocused : focused)();
            });
        }
        if ('onfocusin' in document) {
            document.onfocusin = focused;
            document.onfocusout = unfocused;
        }
        window.onpageshow = window.onfocus = focused;
        window.onpagehide = window.onblur = unfocused;
    });
    return visible;
};
exports.default = usePageVisibility;
//# sourceMappingURL=usePageVisibility.js.map