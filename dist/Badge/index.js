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
const Badge = (_a) => {
    var { value } = _a, rest = __rest(_a, ["value"]);
    return (React.createElement("div", Object.assign({ className: `badge ${!value ? 'badge--none' : ''} ` }, rest),
        React.createElement("h4", { className: "heavy" }, value || 0)));
};
export default Badge;
