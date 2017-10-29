/* eslint-disable import/prefer-default-export, no-prototype-builtins */

export const isEmptyObj = (obj) => {
  const keys = Object.keys(obj);
  if (keys.length) {
    return !(keys.some(k => obj.hasOwnProperty(k)));
  }

  return true;
};
