import 'mocha'
import { expect } from 'chai'
import { find } from '../src/index'

describe('find', (): void => {
  it('finds a string', (): void => {
    const inputObject = {
      foo: {
        bar: {
          cool: 'beans'
        }
      }
    }
    const expected = 'beans'
    const actual = find('cool', inputObject)
    expect(actual).to.equal(expected)
  })

  it('finds nothing and returns null', (): void => {
    const inputObject = {
      foo: {
        bar: {
          cool: 'beans'
        }
      }
    }
    const expected = null
    const actual = find('biz', inputObject)
    expect(actual).to.equal(expected)
  })

  it('finds an object', (): void => {
    const inputObject = {
      foo: {
        bar: {
          cool: 'beans'
        }
      }
    }
    const expected = {
      cool: 'beans'
    }
    const actual = find('bar', inputObject)
    expect(actual).to.deep.equal(expected)
  })

  it('finds an object in array', (): void => {
    const inputObject = {
      foo: {
        bar: [
          { cool: 'beans' },
          { damn: 'son' },
          { oh: 'lordy' }
        ]
      }
    }
    const expected = 'beans'
    const actual = find('cool', inputObject)
    expect(actual).to.deep.equal(expected)
  })
})
