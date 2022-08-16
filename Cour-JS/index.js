let total = 0;

addition = (x) => {
  total += x;
  return total;
};
soustraction = (x) => {
  total -= x;
  return total;
};
multiplication = (x) => {
  if (total === 0) {
    return (total = x);
  } else {
    total *= x;
    return total;
  }
};
division = (x) => {
  if (total === 0) {
    return (total = x);
  } else {
    total /= x;
    return total;
  }
};
