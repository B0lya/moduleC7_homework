import { revertString } from './revertStr';

describe("tests for revertString function", () => {
  it("should reverse string", () => expect(revertString("Everest")).toBe("tserevE"));
});
