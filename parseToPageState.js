"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseToPageState = void 0;
const nookies_1 = require("nookies");
function parseToPageState(initialPageState, path) {
    let key = path; // TODO:
    const cookies = (0, nookies_1.parseCookies)();
    let value = cookies[path];
    value = value === null || value === void 0 ? void 0 : value.replace(`${key}=`, ""); // TODO:
    if (!value) {
        return initialPageState;
    }
    let jsonString = decodeURIComponent(value !== null && value !== void 0 ? value : "");
    const json = JSON.parse(jsonString);
    return json;
}
exports.parseToPageState = parseToPageState;
