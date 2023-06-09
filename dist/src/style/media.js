"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultMediaBreakpoints = void 0;
const styled_components_1 = require("styled-components");
exports.defaultMediaBreakpoints = {
    mobile: '680px',
    tablet: '1000px',
    desktop: '1280px',
    wide: '1600px',
};
const media = Object.keys(exports.defaultMediaBreakpoints).reduce((memo, val) => {
    memo[val] = (...args) => (0, styled_components_1.css) `
    @media (min-width: ${exports.defaultMediaBreakpoints[val]}) {
      ${(0, styled_components_1.css)(...args)};
    }
  `;
    return memo;
}, {});
exports.default = media;
//# sourceMappingURL=media.js.map