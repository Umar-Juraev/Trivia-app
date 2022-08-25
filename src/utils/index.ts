export const randomInt = (max: number) =>
  Math.floor(Math.random() * Math.floor(max));
export const generateArrayFromInt = (num: number) => {
  let result = [];
  for (let i = 0; i < num; i++) {
    result.push(i);
  }
  return result;
};
