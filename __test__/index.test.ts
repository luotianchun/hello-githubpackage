import { expect, test } from 'vitest'
const add:Function = require('../build/bundle.cjs')
test('test', () => {
  expect(add(1,3)).toBe(4)
})