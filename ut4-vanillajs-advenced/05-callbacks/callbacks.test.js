import * as callbacks from "./callbacks";

describe("Sync Callback", () => {
  it("should gets 23, when adds [1,2,3,4,5] + [2,3,1,2]", () => {
    const result = callbacks.addTwoArrays(
      [1, 2, 3, 4, 5],
      [2, 3, 1, 2],
      callbacks.myAddCallback
    );
    expect(result).toBe(23);
  });
  it("should gets My tasks list: study buy sleep play, when pass [study,buy,sleep,play]", () => {
    const result = callbacks.myTasksListCallback(
      ["study", "buy", "sleep", "play"],
      callbacks.myTasksListCallback
    );
    expect(result).toBe("My tasks list: study buy sleep play");
  });
});
