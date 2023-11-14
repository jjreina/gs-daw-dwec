export class Person {
  #name_first;
  #name_last;
  #mail;
  #phone;
  #cell;
  #picture;

  constructor(name_first, name_last) {
    this.#name_first = name_first;
    this.#name_last = name_last;
  }

  get name_first() {
    return this.#name_first;
  }

  set name_first(name_first) {
    return (this.#name_first = name_first);
  }
}
