import React from 'react';
export declare function parseQueryStringByPageState<T>(pageState: T): string;
export default function PageStateProvider<T>({ children, current, maxAge, }: {
    children: React.ReactNode;
    current: T;
    maxAge?: number;
}): JSX.Element;
