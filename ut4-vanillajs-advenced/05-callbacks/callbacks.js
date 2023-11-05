export function myAddCallback(array1, array2) {
  const initialValue = 0;
  const arraySpread = [...array1, ...array2];
  const result = arraySpread.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, initialValue);
  return result;
}

export function addTwoArrays(array1, array2, callback) {
  return callback(array1, array2);
}

export const myTasksListCallback = (taskList) => {
  const initialValue = "My tasks list:";
  return taskList.reduce((accumulator, currentValue) => {
    return `${accumulator} ${currentValue}`;
  }, initialValue);
};

export function showTasksList(taskList, callback) {
  return callback(taskList);
}

export const myDoubleElementCallback = (array) => {
  return array.map((element) => {
    return element * 2;
  });
};

//Async
export const doubleElement = (array, callback) => {
  setTimeout(() => {
    console.log(callback(array));
  }, 6000);
};

export function addTwoArraysAsync(array1, array2, callback) {
  setTimeout(() => {
    console.log(callback(array1, array2));
  }, 3000);
}

export function showTasksListAsync(taskList, callback) {
  setTimeout(() => {
    console.log(callback(taskList));
  }, 2000);
}

doubleElement([2, 3, 4], myDoubleElementCallback); // 6s
addTwoArraysAsync([2, 3, 4], [2, 3, 4], myAddCallback); // 3s
showTasksListAsync(["study", "buy", "sleep", "play"], myTasksListCallback); // 2s
