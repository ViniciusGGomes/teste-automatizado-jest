import { sum } from "./sum";

describe("sum", () => {
  let sumResult: number;

  beforeAll(() => {
    sumResult = 10;
    console.log("EXECUTA ANTES DOS TESTES", sumResult);
  });

  afterAll(() => {
    sumResult = 0;
    console.log("EXECUTA DEPOIS DOS TESTES", sumResult);
  });

  it("Should do sum of 3 + 7 must be 10", () => {
    const result = sum(3, 7);

    expect(result).toBe(10);
  });

  test("sum of 2 + 2 must be 4", () => {
    const result = sum(2, 2);

    expect(result).toBe(4);
  });
});
