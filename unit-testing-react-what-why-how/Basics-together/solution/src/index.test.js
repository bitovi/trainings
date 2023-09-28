// Potential Solutions.
describe("the sum function", () => {

  // Test broken into AAA pattern
  it("adds the numbers together", () => {
    
    // Assign
    const values = [ 1, 2]
    
    // Act
    const result = sum(values)
    
    // Assert
    expect(result).toBe(3)
  })
  
  // Condensed tests:

  // Smoke Test
  test("isn't on fire 🔥"), () => {
    sum([ 1, 2 ])
  }

  // Contract Test
  test("returns a number"), () => {
    expect(typeof sum([ 1, 2 ])).toBe("number")
  }

  // Comprehensive Test
  test("adds the numbers"), () => {
    expect(sum([ 1, 2 ])).toBe(3)
  }

}) 
