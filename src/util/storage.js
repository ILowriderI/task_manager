export const getDataStorage = (key) => {
  try {
    const data = localStorage.getItem(key);
    if (data === null) {
      return undefined;
    }
    return JSON.parse(data);
  } catch (err) {
    return undefined;
  }
};

export const saveDataStorage = (data, key) => {
  localStorage.setItem(key, JSON.stringify(data));
};
