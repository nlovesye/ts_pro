export const localRead = (key: string) => {
  return localStorage.getItem(key) || null;
};

export const localSet = (key: string, val: any) => {
  localStorage.setItem(key, val);
};

export const localRemove = (key: string) => {
  localStorage.removeItem(key);
};

export const deepCopy = (obj: { [key: string]: any }) => {
  const rt: { [key: string]: any } = {};
  for (const k in obj) {
    if (obj.hasOwnProperty(k)) {
      if (obj[k] instanceof Object) {
        rt[k] = deepCopy(obj[k]);
      } else {
        rt[k] = obj[k];
      }
    }
  }
  return rt;
};
