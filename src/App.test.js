import { getRandomIndexes } from "./App";

test("Testing getRandomIndexes", () => {
  expect(getRandomIndexes(4).length).toBe(4);
});
