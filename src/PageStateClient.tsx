'use client';

import { createContext, useContext } from 'react';
import { destroyCookie, parseCookies } from 'nookies';

export const PageStateContext = createContext(undefined as any);
export function usePageState<T>() {
  return useContext<[T, (pageState: T, path: string) => void]>(
    PageStateContext,
  );
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

export function getPageLocation(path: string) {
  const cookies = parseCookies();
  const value = cookies[path];
  const jsonString = decodeURIComponent(value ?? '');
  const json = JSON.parse(jsonString);
  const params = new URLSearchParams(json);
  return params.toString();
}

export function clearPageState(path: string) {
  destroyCookie(null, path);
}
