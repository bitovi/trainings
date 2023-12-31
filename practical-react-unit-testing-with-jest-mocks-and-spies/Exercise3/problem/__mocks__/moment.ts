// With this mock moment.js file,  moment is mocked automatically by Jest.
// No need to call jest.mock("moment");

class MockMoment {
  // return a mock year that will match the test's expectations.
  // Check with src/getDefaultSelectOptions.test.ts to see what the test needs.
  // After that, return to src/toSelectOptions.test.tsx for further instructions.
  year(): number {
    
  }
}

export default function moment() {
  return new MockMoment()
}