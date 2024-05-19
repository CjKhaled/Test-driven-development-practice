import calculator from "../src/calculatorObj"

test("Functions correctly", () => {
    expect(calculator.add(3, 2)).toBe(5)
    expect(calculator.subtract(3, 2)).toBe(1)
    expect(calculator.multiply(3, 2)).toBe(6)
    expect(calculator.divide(3, 2)).toBe(1.5)
}) 