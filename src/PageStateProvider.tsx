'use client';

import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { setCookie } from 'nookies';
import { PageStateContext } from './PageStateClient';

function setCookieForState(key: string, value: string) {
  setCookie(null, key, value, {
    maxAge: 30 * 24 * 60 * 60,
    path: '/',
  });
}

export function parseQueryStringByPageState<T>(pageState: T) {
  const queryString = `${encodeURIComponent(JSON.stringify(pageState))}`;
  return queryString;
}

export default function PageStateProvider<T>({
  children,
  current,
}: {
  children: React.ReactNode;
  current: T;
}) {
  const [pageState, _setPageState] = useState(current);
  const router = useRouter();

  function setPageState(nextPageState: T, path: string) {
    const newPageState = { ...pageState, ...nextPageState };
    _setPageState(newPageState);

    const pageStateString = parseQueryStringByPageState(newPageState);
    setCookieForState(path, `${pageStateString}`);

    router.push(`${location.origin}${path}`);
  }

  return (
    <PageStateContext.Provider value={[pageState, setPageState]}>
      {children}
    </PageStateContext.Provider>
  );
}
