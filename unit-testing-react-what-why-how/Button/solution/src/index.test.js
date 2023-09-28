describe('the button', () => {
  it("will call it's handler when clicked", () => {

    // Arrange
      // jest.fn() creates a mock function
    const handler = jest.fn()  
    
    // Act
    render(<Button label="Click Me!" onClick={handler} />)
    
    // Arrange
    const button = screen.getByText("Click Me!")
    
    // Act
    user.click(button)
    
    // Assert
    expect(handler).toHaveBeenCalledTimes(1)
    
	})
})