import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function readProjectFile(filePath) {
  return fs.readFileSync(path.join(ROOT, filePath), 'utf8');
}

function loadTranslations() {
  const source = readProjectFile('translations.js');
  const factory = new Function(`${source}\nreturn translations;`);
  return factory();
}

function getByPath(obj, keyPath) {
  return keyPath.split('.').reduce((value, key) => value?.[key], obj);
}

function extractPlaceholderBindings(html) {
  return [...html.matchAll(/\bdata-translate-placeholder="([^"]+)"/g)].map((match) => match[1]);
}

function extractPlaceholderValues(html) {
  return [...html.matchAll(/(?<!data-translate-)\bplaceholder="([^"]*)"/g)].map((match) => match[1]);
}

export function assertLocalePlaceholderContract() {
  const translations = loadTranslations();
  const files = [
    ['en', 'index.html'],
    ['es', 'es/index.html'],
    ['el', 'el/index.html'],
    ['fr', 'fr/index.html'],
  ];

  for (const [locale, filePath] of files) {
    const html = readProjectFile(filePath);
    const bindings = extractPlaceholderBindings(html);
    const placeholderValues = extractPlaceholderValues(html);

    assert.equal(
      bindings.length,
      placeholderValues.length,
      `${filePath} must keep placeholder bindings and placeholder values in sync`
    );

    bindings.forEach((binding, index) => {
      assert.match(
        binding,
        /^[a-z][a-zA-Z0-9]*(\.[a-zA-Z0-9]+)+$/,
        `${filePath} placeholder binding "${binding}" must be a translation key path`
      );

      const translated = getByPath(translations[locale], binding);
      assert.equal(
        typeof translated,
        'string',
        `${filePath} placeholder binding "${binding}" must resolve to a string in locale "${locale}"`
      );
      assert.match(
        translated,
        /\S/,
        `${filePath} placeholder binding "${binding}" must not resolve to an empty string in locale "${locale}"`
      );
      assert.equal(
        placeholderValues[index],
        translated,
        `${filePath} placeholder for "${binding}" must match the locale translation`
      );
    });
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  assertLocalePlaceholderContract();
}
