import { toFormat } from '../lib/node/index.js';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { test } from 'uvu';
import { not } from 'uvu/assert';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const avatar = fs.readFileSync(path.resolve(__dirname, 'fixtures/avatar.svg'), {
  encoding: 'utf8',
});

test(`Convert to png buffer`, async () => {
  not.throws(() => toFormat(avatar, 'png').toArrayBuffer());
});

test(`Convert to png data uri`, async () => {
  not.throws(() => toFormat(avatar, 'png').toDataUri());
});

test.run();
