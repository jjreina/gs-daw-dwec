const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
export const promise_1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let newArray = array.map((item) => item * 2);
      resolve(newArray);
    }, 5000);
  });
};

export const promise_2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let newArray = array.map((item) => item * 3);
      resolve(newArray);
    }, 8000);
  });
};

export const promise_3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let newArray = array.map((item) => item * 4);
      resolve(newArray);
    }, 5000);
  });
};
