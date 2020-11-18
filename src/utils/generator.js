export const generateRandNum = (max, except = null) => {
  const n = Math.floor(Math.random() * max);

  if (n !== except) {
    return n;
  } else {
    alert('running again', n);
    const nn = generateRandNum(max, except);
    console.log(nn);
    return nn;
  }
};
