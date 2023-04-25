import React from 'react';
export declare function parseQueryStringByPageState<T>(pageState: T): string;
export default function PageStateProvider<T>({ children, current, }: {
    children: React.ReactNode;
    current: T;
}): JSX.Element;
