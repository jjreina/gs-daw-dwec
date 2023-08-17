import * as literals from "./literals-objects";

describe("Gets", () => {
  it("should returns Naruto index", () => {
    expect(literals.person.getAge()).toBe(32);
  });
});
