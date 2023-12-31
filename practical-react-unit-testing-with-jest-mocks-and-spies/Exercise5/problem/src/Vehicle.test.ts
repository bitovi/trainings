/* 
  
 Exercise 5: 
  
  This exercise covers the automatic mocking of ES6 classes
    when they are the default export of a module, and the use of
    jest.requireActual() to get a module's non-mocked implementation.

  The Vehicle class is automatically mocked by Jest but the
    mock class's methods have no implementation yet.

 1) use .mockImplementation() to make .getVehicle() return "Wrangler"
 2) use jest.requireActual() to get the *real* implementation of toString()
      from the Vehicle module.  For your convenience, toString() has been
      decoupled from the Vehicle prototype and made its own export.
  
 The tests should pass after completing the steps above. 
  
 */
import Vehicle from "./Vehicle";

jest.mock("./Vehicle");

describe("Vehicle component", () => {
  it("uses global mock", () => {
    const instance = new Vehicle("Renegade");
    // Provide a mock implementation of instance.getVehicle()

    // use requireActual to get the "real" toString() function from the module.
    const toString = jest.fn();

    expect(toString.call(instance)).toEqual("[Vehicle Wrangler]");
    expect(instance.getVehicle).toHaveBeenCalled();
  });
});
