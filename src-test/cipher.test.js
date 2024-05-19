import caesarCipher from "../src/caesarcipher";

test("Basic cases are correct", () => {
    expect(caesarCipher("NOSPACESWHAT", 7)).toBe("UVZWHJLZDOHA")
    expect(caesarCipher("UVZWHJLZDOHA", -7)).toBe("NOSPACESWHAT")
})

test("Accounting for spaces is correct", () => {
  expect(caesarCipher("Beware the Ides of March.", 7)).toBe(
    "ILDHYL AOL PKLZ VM THYJO."
  );
  expect(caesarCipher("ILDHYL AOL PKLZ VM THYJO.", -7)).toBe("BEWARE THE IDES OF MARCH.");
});
