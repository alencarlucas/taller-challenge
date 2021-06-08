const challenge = require('../src/js_challenge_1')


describe('js_challenge_1', () => {
  let spy

  beforeEach(() => {
    spy = jest.spyOn(console, 'log').mockImplementation()
  })

  afterEach(() => {
    spy.mockRestore()
  })

  test('Receive [4, 8, 0, 9, 2, 5, 0, 3, 3, 0] should return 8', () => {
    expect(challenge([4, 8, 0, 9, 2, 5, 0, 3, 3, 0])).toBe(8)

    // move all 0 to right
    expect(spy).toHaveBeenNthCalledWith(
      1,
      [4, 8, 9, 2, 5, 3, 3, 0, 0, 0]
    )

    // add 1 unit to fictitious integer
    expect(spy).toHaveBeenNthCalledWith(
      2,
      [4, 8, 9, 2, 5, 3, 4]
    )

    // maximum sub-array sum
    expect(spy).toHaveBeenNthCalledWith(
      3,
      8
    )
  })

  test('Receive [4, 8, 9, 2, 5, 8, 4, 8] should return 13', () => {
    expect(challenge([4, 8, 9, 2, 5, 8, 4, 8])).toBe(13)

    // move all 0 to right
    expect(spy).toHaveBeenNthCalledWith(
      1,
      [4, 8, 9, 2, 5, 8, 4, 8]
    )

    // add 1 unit to fictitious integer
    expect(spy).toHaveBeenNthCalledWith(
      2,
      [4, 8, 9, 2, 5, 8, 4, 9]
    )

    // maximum sub-array sum
    expect(spy).toHaveBeenNthCalledWith(
      3,
      13
    )
  })

  test('Receive [9, 0, 9, 0, 9, 0] should return 0', () => {
    expect(challenge([9, 0, 9, 0, 9, 0])).toBe(0)

    // move all 0 to right
    expect(spy).toHaveBeenNthCalledWith(
      1,
      [9, 9, 9, 0, 0, 0]
    )

    // add 1 unit to fictitious integer
    expect(spy).toHaveBeenNthCalledWith(
      2,
      [1, 0, 0, 0]
    )

    // maximum sub-array sum
    expect(spy).toHaveBeenNthCalledWith(
      3,
      0
    )
  })
})
