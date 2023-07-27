import * as arrays from "./arrays";

describe("Basics array methos", () => {
  it("should removes first element from array", () => {
    expect(arrays.deleteFirtPosition()).toBe("Zelda");
  });

  it("should removes last element from array", () => {
    expect(arrays.deleteLastPosition()).toBe("Chrono");
  });

  it("should inserts new element at the start of an array", () => {
    expect(arrays.addFirstPosition("Fornite")).toBe(3);
    expect(arrays.games[0]).toBe("Fornite");
  });

  it("should appends new element to the end of an array", () => {
    expect(arrays.addLastPosition("Pokemon")).toBe(4);
    expect(arrays.games[arrays.games.length - 1]).toBe("Pokemon");
  });
});
