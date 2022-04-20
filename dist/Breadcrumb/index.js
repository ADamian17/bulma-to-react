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
import React from 'react';
const Breadcrumb = (_a) => {
    var { breadcrumbsList, children, className = '', alignment = '' } = _a, rest = __rest(_a, ["breadcrumbsList", "children", "className", "alignment"]);
    return (React.createElement("nav", Object.assign({ className: `breadcrumb ${className} ${alignment}`, "aria-label": "breadcrumbs" }, rest), children));
};
export default Breadcrumb;
