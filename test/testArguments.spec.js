/* global describe, beforeEach, it, context */

var parseArgs = require('../index')

var assert = require('assert')

describe('parseArgs.arguments', () => {
  let args
  beforeEach(() => {
    args = [
      'node',
      'test.js'
    ]
  })

  context('when valid', () => {
    it('should handle bool argument', () => {
      args.push('--debug')
      assert.strict.equal(parseArgs(args).debug, true)
    })
    it('should handle value in argument', () => {
      args.push('--input=test')
      assert.strict.equal(parseArgs(args).input, 'test')
    })
    it('should handle value in argument with quotes', () => {
      args.push('--input="test"')
      assert.strict.equal(parseArgs(args).input, '"test"')
    })
  })

  context('when invalid', () => {
    it('is undefined when not passed in', () => {
      assert.strict.equal(parseArgs(args).debug, undefined)
    })
  })
})
