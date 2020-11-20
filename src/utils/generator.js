export const generateRandNum = (max, except = null) => {
  const n = Math.floor(Math.random() * max);

  if (n !== except) {
    return n;
  } else {
    return generateRandNum(max, except);
  }
};
