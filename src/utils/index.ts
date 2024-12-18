/* eslint-disable @typescript-eslint/no-explicit-any */

export const debounce = <T extends (...args: any[]) => any>(
  callback: T,
  waitFor: number
) => {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<T>): ReturnType<T> => {
    let result: any;

    // clear the timeout if there is a pending invocation
    if (timeoutId) clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      result = callback(...args);
    }, waitFor);

    return result;
  };
};
