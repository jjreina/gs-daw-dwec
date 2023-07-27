import { deleteFirtPosition, deleteLastPosition } from "./arrays";

it("remove first element from array", () => {
  expect(deleteFirtPosition()).toBe("Zelda");
});

it("remove last element from array", () => {
  expect(deleteLastPosition()).toBe("Chrono");
});
