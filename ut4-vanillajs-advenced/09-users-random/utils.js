export const parserToPersonClass = (object, person) => {
  return new Promise((resolve, reject) => {
    if (object === null || object === undefined) {
      reject(`${object} is not ok`);
    } else {
      person.name_first = object.name.first;
      person.name_last = object.name.last;
      person.mail = object.email;
      person.phone = object.phone;
      person.picture = object.picture.large;
      person.location = object.location.city;
      resolve(person);
    }
  });
};
