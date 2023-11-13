class MockMoment {
  year() {
    return 2000;
  }
}

export default function moment() {
  return new MockMoment()
}