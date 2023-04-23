"use client";

import { parseCookies } from "nookies";

export function parseToPageState<T>(
  initialPageState: T,
  path: string
): T {
  let key = path; // TODO:

  const cookies = parseCookies();

  let value = cookies[path];
  value = value?.replace(`${key}=`, ""); // TODO:
  if (!value) {
    return initialPageState;
  }

  let jsonString = decodeURIComponent(value ?? "");

  const json = JSON.parse(jsonString);
  return json;
}
