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
const Button = (_a) => {
    var { children, className, isDisabled = false, isInverted, isLight, isLoading, isOutlined, isResponsive, isRounded, size, variant } = _a, rest = __rest(_a, ["children", "className", "isDisabled", "isInverted", "isLight", "isLoading", "isOutlined", "isResponsive", "isRounded", "size", "variant"]);
    return (React.createElement("button", Object.assign({ className: `button
        ${className} 
        ${isInverted && 'is-inverted'} 
        ${isLight && 'is-light'} 
        ${isLoading && 'is-loading'} 
        ${isOutlined && 'is-outlined'} 
        ${isResponsive && 'is-responsive'} 
        ${isRounded && 'is-rounded'} 
        ${size ? size : ''}
        ${variant} 
      ` }, rest, { disabled: isDisabled }), children));
};
export default Button;
