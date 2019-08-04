/* global describe, beforeEach, it, context */

var parseArgs = require('../index')

var assert = require('assert')

describe('parseArgs.attributes', () => {
  let args
  beforeEach(() => {
    args = [
      'node',
      'test.js'
    ]
  })

  context('when valid', () => {
    it('should handle single attribute', () => {
      args.push('test')
      const result = parseArgs(args)
      assert.strict.equal(result.attrs.length, 1)
      assert.strict.equal(result.attrs.includes('test'), true)
    })
    it('should handle multiple attributes passed in', () => {
      args.push('test')
      args.push('cover')
      const result = parseArgs(args)
      assert.strict.equal(result.attrs.length, 2)
      assert.strict.equal(result.attrs.includes('test'), true)
      assert.strict.equal(result.attrs.includes('cover'), true)
    })
  })

  context('when invalid', () => {
    it('has length of zero when no attrs are passed in', () => {
      assert.strict.equal(parseArgs(args).attrs.length, 0)
    })
  })
})
