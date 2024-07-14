export const truncateString = (str: string = '', charCount: number) => {
  return charCount ? `${str.slice(0, charCount)}...` : str;
}