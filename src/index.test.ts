import { add } from ".";

describe("add", () => {
  test("should add 2 numbers", () => {
    expect(add(1, 2)).toEqual(3);
  });
});
