import capitalize from "../src/capitalize";
import reverseString from "../src/reverse";

test("Capitalizes", () => {
  expect(capitalize("hey")).toBe("Hey");
  expect(capitalize("bye")).toBe("Bye");
  expect(capitalize("BOOM")).toBe("Boom");
});

test("Reverses", () => {
  expect(reverseString("racecar")).toBe("racecar");
  expect(reverseString("BOOM")).toBe("MOOB");
  expect(reverseString("Hello")).toBe("olleH");
});
