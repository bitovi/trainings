class MockMoment {
  // return a mock year that will match the test's expectations.
  year(): number {
    
  }
}

export default function moment() {
  return new MockMoment()
}