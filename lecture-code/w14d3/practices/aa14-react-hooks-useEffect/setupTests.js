import '@testing-library/jest-dom/vitest';

expect.extend({
  toBeOneOf(actual, expected) {
    if (!(expected instanceof Array)) {
      throw new Error("Expected value must be an Array");
    }
    const pass = actual.length === 0 || expected.includes(actual);
    return {
      pass,
      message: pass
        ? () => `expected Array not to contain ${actual}`
        : () => `expected Array to contain ${actual}`
    };
  },
});
