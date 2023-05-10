/// <reference types="react" />
export declare const PageStateContext: import("react").Context<any>;
export declare function usePageState<T>(): [T, (pageState: T, path: string, refresh?: () => void) => void];
export declare function getPageState<T>(initialPageState: T, path: string): T;
export declare function getPageLocation(path: string): string;
export declare function clearPageState(path: string): void;
