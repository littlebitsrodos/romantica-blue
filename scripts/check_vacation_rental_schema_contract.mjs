import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function readProjectFile(filePath) {
  return fs.readFileSync(path.join(ROOT, filePath), 'utf8');
}

function extractVacationRentalSchema() {
  const indexHtml = readProjectFile('index.html');
  const matches = [...indexHtml.matchAll(/<script type="application\/ld\+json">\s*([\s\S]*?)\s*<\/script>/g)];
  const vacationRentalScript = matches
    .map((match) => JSON.parse(match[1]))
    .find((schema) => schema['@type'] === 'VacationRental');

  assert.ok(vacationRentalScript, 'index.html must contain a VacationRental JSON-LD block');
  return vacationRentalScript;
}

function assertOccupancyShape(node, label) {
  assert.ok(node.occupancy, `${label} must define occupancy`);
  assert.equal(node.occupancy['@type'], 'QuantitativeValue', `${label} occupancy must be a QuantitativeValue`);
  assert.equal(typeof node.occupancy.value, 'number', `${label} occupancy.value must be a number`);
}

export function assertVacationRentalSchemaContract() {
  const schema = extractVacationRentalSchema();

  assert.equal(typeof schema.identifier, 'string', 'VacationRental identifier must be a string');
  assert.match(schema.identifier, /\S/, 'VacationRental identifier must not be empty');

  assertOccupancyShape(schema, 'VacationRental');

  assert.ok(Array.isArray(schema.containsPlace), 'VacationRental containsPlace must be an array');
  assert.ok(schema.containsPlace.length > 0, 'VacationRental containsPlace must not be empty');

  for (const place of schema.containsPlace) {
    assertOccupancyShape(place, `containsPlace "${place.name ?? 'unknown'}"`);
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  assertVacationRentalSchemaContract();
}
