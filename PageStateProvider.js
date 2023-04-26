"use strict";
'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseQueryStringByPageState = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const navigation_1 = require("next/navigation");
const nookies_1 = require("nookies");
const PageStateClient_1 = require("./PageStateClient");
const xxhash_wasm_1 = __importDefault(require("xxhash-wasm"));
function setCookieForPageState(key, value, maxAge) {
    (0, nookies_1.setCookie)(null, key, value, {
        maxAge: maxAge !== null && maxAge !== void 0 ? maxAge : 30 * 24 * 60 * 60,
        path: '/',
    });
}
function parseQueryStringByPageState(pageState) {
    const queryString = `${encodeURIComponent(JSON.stringify(pageState))}`;
    return queryString;
}
exports.parseQueryStringByPageState = parseQueryStringByPageState;
function PageStateProvider({ children, current, maxAge, }) {
    const [pageState, _setPageState] = (0, react_2.useState)(current);
    const router = (0, navigation_1.useRouter)();
    function setPageState(nextPageState, path) {
        const newPageState = Object.assign(Object.assign({}, pageState), nextPageState);
        _setPageState(newPageState);
        const pageStateString = parseQueryStringByPageState(newPageState);
        setCookieForPageState(path, `${pageStateString}`, maxAge);
        (0, xxhash_wasm_1.default)().then((hasher) => {
            const hash = hasher.h64ToString(pageStateString);
            router.push(`${location.origin}${path}?location=${hash}`);
        });
    }
    return (react_1.default.createElement(PageStateClient_1.PageStateContext.Provider, { value: [pageState, setPageState] }, children));
}
exports.default = PageStateProvider;
