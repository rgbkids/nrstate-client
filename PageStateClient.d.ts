/// <reference types="react" />
export declare const PageStateContext: import("react").Context<any>;
export declare function usePageState<T>(): [T, (pageState: T, path: string) => void];
export declare function getPageState<T>(initialPageState: T, path: string): T;
export declare function clearPageState(path: string): void;
