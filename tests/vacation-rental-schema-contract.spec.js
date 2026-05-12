import { test, expect } from '@playwright/test';
import { assertVacationRentalSchemaContract } from '../scripts/check_vacation_rental_schema_contract.mjs';

test.describe('VacationRental schema contract', () => {
  test('identifier and occupancy stay validator-friendly', () => {
    expect(() => assertVacationRentalSchemaContract()).not.toThrow();
  });
});
