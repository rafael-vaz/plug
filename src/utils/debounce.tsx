// delay for functions
export function debounce(
  callback: (...args: unknown[]) => void,
  delay: number
) {
  let timer: number | null;
  return (...args: unknown[]) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
      timer = null;
    }, delay);
  };
}
