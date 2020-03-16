export const localRead = (key: string) => {
  return localStorage.getItem(key) || null;
};
