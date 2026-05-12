import { test, expect } from '@playwright/test';
import { assertLocalePlaceholderContract } from '../scripts/check_locale_placeholder_contract.mjs';

test.describe('Locale placeholder contract', () => {
  test('placeholder bindings resolve through translations', () => {
    expect(() => assertLocalePlaceholderContract()).not.toThrow();
  });
});
