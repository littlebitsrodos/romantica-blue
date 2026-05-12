import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function readProjectFile(filePath) {
  return fs.readFileSync(path.join(ROOT, filePath), 'utf8');
}

function normalizeAssetPath(assetPath) {
  if (assetPath === './') return './';
  if (assetPath.startsWith('/')) return `./${assetPath.slice(1)}`;
  if (!assetPath.startsWith('./')) return `./${assetPath}`;
  return assetPath;
}

function extractServiceWorkerAssets() {
  const sw = readProjectFile('sw.js');
  const cacheName = sw.match(/const\s+CACHE_NAME\s*=\s*['"]([^'"]+)['"]/)?.[1];
  const assetList = sw.match(/const\s+ASSETS_TO_CACHE\s*=\s*\[([\s\S]*?)\];/)?.[1];

  assert.ok(cacheName, 'sw.js must declare CACHE_NAME');
  assert.match(cacheName, /^sea-tree-v\d+$/, 'CACHE_NAME must end in a numeric version');
  assert.ok(assetList, 'sw.js must declare ASSETS_TO_CACHE');

  return new Set(
    [...assetList.matchAll(/['"]([^'"]+)['"]/g)].map((match) => normalizeAssetPath(match[1]))
  );
}

export function assertPwaCacheContract() {
  const cachedAssets = extractServiceWorkerAssets();
  const indexHtml = readProjectFile('index.html');
  const manifest = JSON.parse(readProjectFile('manifest.json'));

  const headAssets = [...indexHtml.matchAll(/<link[^>]+rel="(?:icon|apple-touch-icon|manifest)"[^>]+href="([^"]+)"/g)]
    .map((match) => normalizeAssetPath(match[1]));
  const manifestIconAssets = manifest.icons.map((icon) => normalizeAssetPath(icon.src));
  const requiredAssets = new Set([...headAssets, ...manifestIconAssets]);

  for (const assetPath of requiredAssets) {
    assert.ok(cachedAssets.has(assetPath), `${assetPath} must be listed in ASSETS_TO_CACHE`);
  }

  for (const assetPath of cachedAssets) {
    if (assetPath === './') continue;

    const filePath = assetPath.replace(/^\.\//, '');
    assert.ok(fs.existsSync(path.join(ROOT, filePath)), `${assetPath} must exist`);
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  assertPwaCacheContract();
}
