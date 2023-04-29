export const debounce = <Params extends unknown[]>(
  callback: (...args: Params) => unknown,
  wait: number
) => {
  let timeoutId: NodeJS.Timeout | null = null;

  return (...args: Params) => {
    if (timeoutId !== null) window.clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback(...args);
    }, wait);
  };
};
