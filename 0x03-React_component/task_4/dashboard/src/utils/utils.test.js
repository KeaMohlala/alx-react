import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

// Test for getFullYear
test("getFullYear returns the correct year", () => {
  const currentYear = new Date().getFullYear();
  expect(getFullYear()).toBe(currentYear);
});

// Test for getFooterCopy
describe("getFooterCopy", () => {
  test('returns "Holberton School" when isIndex is true', () => {
    expect(getFooterCopy(true)).toBe("Holberton School");
  });

  test('returns "Holberton School main dashboard" when isIndex is false', () => {
    expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
  });
});

// Test for getLatestNotification
test("getLatestNotification returns the correct string", () => {
  expect(getLatestNotification()).toBe(
    "<strong>Urgent requirement</strong> - complete by EOD"
  );
});
