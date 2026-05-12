import { test, expect } from '@playwright/test';
import { assertPwaCacheContract } from '../scripts/check_pwa_cache_contract.mjs';

test.describe('PWA asset cache contract', () => {
  test('favicon, manifest, and cached shell assets stay in sync', () => {
    expect(() => assertPwaCacheContract()).not.toThrow();
  });
});
