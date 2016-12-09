var chai = require('chai')
var expect = chai.expect
var assert = chai.assert

describe('should pass a basic assert', function () {
  it('is true', function () {
    assert.isTrue(true)
  })
})

describe('A passing test', function() {
  it('should pass a basic test', function() {
      expect(true).to.be.true
  })
})
