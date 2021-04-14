export const getUniqueValue = (data, type) => {
  let unique = data.map((item) => item[type]);
  // if there is array in array we use this if in this project only color is array in array

  // return the "all" and dont return the same ones
  return ["all", ...new Set(unique)];
};
