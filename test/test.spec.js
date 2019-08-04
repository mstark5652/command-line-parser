/* global describe, beforeEach, it, context */

var parseArgs = require('../index')

var assert = require('assert')

describe('parseArgs', () => {
  let args
  beforeEach(() => {
    args = [
      'node',
      'test.js'
    ]
  })

  context('when valid', () => {
    it('handles grabbing executor', () => {
      const result = parseArgs(args)
      assert.strict.equal(result.executor, 'node')
    })
    it('handles grabbing script that was executed', () => {
      const result = parseArgs(args)
      assert.strict.equal(result.script, 'test.js')
    })
    it('handles multiple types of arguments', () => {
      args.push('process')
      args.push('--debug')
      args.push('-v')

      const result = parseArgs(args)
      assert.strict.equal(result.attrs.includes('process'), true)
      assert.strict.equal(result.flags.includes('v'), true)
      assert.strict.equal(result.debug, true)
    })
    it('uses process.argv when options param is not passed in', () => {
      args.push('--debug')
      process.argv = args

      const result = parseArgs()
      assert.strict.equal(result.executor, 'node')
      assert.strict.equal(result.script, 'test.js')
      assert.strict.equal(result.debug, true)
    })
  })

  context('when invalid', () => {
    it('handles empty arguments', () => {
      const result = parseArgs(args)
      assert.strict.equal(result.attrs.length, 0)
      assert.strict.equal(result.flags.length, 0)
    })
    it('handles empty flag', () => {
      args.push('-')

      const result = parseArgs(args)
      assert.strict.equal(result.flags.length, 0)
    })
    it('handles duplicate flags', () => {
      args.push('-v')
      args.push('-v')

      const result = parseArgs(args)
      assert.strict.equal(result.flags.length, 1)
      assert.strict.equal(result.flags.includes('v'), true)
    })
  })
})
