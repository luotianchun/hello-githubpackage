import { expect, test } from 'vitest'
const add:Function = require('@luotianchun/hello-githubpackage')
test('test', () => {
  expect(add(1,3)).toBe(4)
})