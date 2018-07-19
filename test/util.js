import { range } from '../lib/util'
import test from 'ava'

test('should work', (t) => {
  const list = range(1, 3)
  t.deepEqual(list, [1, 2, 3])
})

test('should work for large ranges', (t) => {
  const list = range(1, 1000000)
  t.is(1000000, list.length)
  list.reduce((previous, current) => {
    t.is(previous + 1, current)
    return current
  }, 0)
})
