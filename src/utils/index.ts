export const localRead = (key: string) => {
  return localStorage.getItem(key) || null;
};

export const localSet = (key: string, val: any) => {
  localStorage.setItem(key, val);
};

export const localRemove = (key: string) => {
  localStorage.removeItem(key);
};
