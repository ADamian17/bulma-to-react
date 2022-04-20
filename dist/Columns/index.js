var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from 'react';
const Columns = (_a) => {
    var { responsive, gag, options, className, children } = _a, rest = __rest(_a, ["responsive", "gag", "options", "className", "children"]);
    return (React.createElement("div", Object.assign({ className: `
    columns
    ${className}
    ${gag}
    ${responsive}
    ${options}
  ` }, rest), children));
};
export default Columns;
