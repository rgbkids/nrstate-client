"use strict";
'use client';
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPageState = exports.usePageState = exports.PageStateContext = void 0;
const react_1 = require("react");
const nookies_1 = require("nookies");
exports.PageStateContext = (0, react_1.createContext)(undefined);
function usePageState() {
    return (0, react_1.useContext)(exports.PageStateContext);
}
exports.usePageState = usePageState;
function getPageState(initialPageState, path) {
    const cookies = (0, nookies_1.parseCookies)();
    const value = cookies[path];
    if (!value) {
        return initialPageState;
    }
    const jsonString = decodeURIComponent(value !== null && value !== void 0 ? value : '');
    const json = JSON.parse(jsonString);
    return json;
}
exports.getPageState = getPageState;
