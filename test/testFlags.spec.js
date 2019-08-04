/* global describe, beforeEach, it, context */

var parseArgs = require('../index')

var assert = require('assert')

describe('parseArgs.flags', () => {
  let args
  beforeEach(() => {
    args = [
      'node',
      'test.js'
    ]
  })

  context('when valid', () => {
    it('should handle single flags', () => {
      args.push('-a')
      const result = parseArgs(args)
      assert.strict.equal(result.flags.length, 1)
      assert.strict.equal(result.flags[0], 'a')
    })
    it('should handle multiple flags separated', () => {
      args.push('-a')
      args.push('-b')
      const result = parseArgs(args)
      assert.strict.equal(result.flags.length, 2)
      assert.strict.equal(result.flags.includes('a'), true)
      assert.strict.equal(result.flags.includes('b'), true)
    })
    it('should handle multiple flags together', () => {
      args.push('-ab')
      const result = parseArgs(args)
      assert.strict.equal(result.flags.length, 2)
      assert.strict.equal(result.flags.includes('a'), true)
      assert.strict.equal(result.flags.includes('b'), true)
    })
  })

  context('when invalid', () => {
    it('has length of zero when no flags are passed in', () => {
      assert.strict.equal(parseArgs(args).flags.length, 0)
    })
  })
})
