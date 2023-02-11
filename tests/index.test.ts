import { add } from "../src/index";

describe("add", () => {
  it("adds two numbers together", () => {
    expect(add(1, 2)).toBe(3);
  });
});
