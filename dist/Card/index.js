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
export const CardWrapper = ({ children, className = '', }) => {
    return React.createElement("div", { className: `card ${className}` }, children);
};
export const CardHeader = ({ children, className = '', }) => {
    return React.createElement("div", { className: `card-header ${className}` }, children);
};
export const CardImage = (_a) => {
    var { size, imageSrc, className = '' } = _a, rest = __rest(_a, ["size", "imageSrc", "className"]);
    return (React.createElement("figure", Object.assign({ className: `image ${size} ${className}` }, rest),
        React.createElement("img", { src: imageSrc, alt: "Placeholder image" })));
};
export const CardContent = (_a) => {
    var { children } = _a, rest = __rest(_a, ["children"]);
    return (React.createElement("div", Object.assign({ className: "card-content" }, rest), children));
};
export const CardFooter = (_a) => {
    var { children, className } = _a, rest = __rest(_a, ["children", "className"]);
    return (React.createElement("footer", Object.assign({ className: `card-footer ${className}` }, rest), children));
};
