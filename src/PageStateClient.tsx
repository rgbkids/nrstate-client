'use client';

import { createContext, useContext } from 'react';
import { parseCookies } from 'nookies';

export const PageStateContext = createContext(undefined as any);
export function usePageState() {
  return useContext(PageStateContext);
}

export function getPageState<T>(initialPageState: T, path: string): T {
  const cookies = parseCookies();

  const value = cookies[path];
  if (!value) {
    return initialPageState;
  }
  
  const jsonString = decodeURIComponent(value ?? '');
  const json = JSON.parse(jsonString);
  return json;
}
