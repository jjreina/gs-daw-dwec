import { deleteFirtPosition, deleteLastPosition } from "./arrays";

test("remove first element from array", () => {
  expect(deleteFirtPosition()).toBe("Zelda");
});

test("remove last element from array", () => {
  expect(deleteLastPosition()).toBe("Chrono");
});
