export const isEmptyOrNull = (obj) => {
  if ((obj === undefined && obj === null) || obj === `null`) {
    return true;
  }

  if (typeof obj === "undefined" || obj == `null`) {
    return true;
  }

  if (
    obj === null ||
    obj === undefined ||
    typeof obj === "undefined" ||
    obj === "" ||
    obj == `null`
  ) {
    return true;
  }

  if (Object.keys(obj).length === 0 && obj.constructor === Object) {
    return true;
  }

  if (Array.isArray(obj)) {
    if (obj.length > 0) {
      return false;
    }

    return true;
  }

  if (obj) {
    return false;
  }
  return true;
};

export const esIsArray = (list) => {
  if (!isEmptyOrNull(list)) {
    return Array.isArray(list);
  }
  return false;
};

export const getStrDate = (date) => {
  return new Date(date).toDateString();
};


