// TODO: test this
// renderHook’s return value is actually the “result.current”
// useLoggedInUser will always return the same, but for simplicity sake, pretend it’s a good hook.
test('returns logged in user', () => {
  const {result} = renderHook(() => useLoggedInUser())
  expect(result.current).toEqual({name: 'Alice'})
})
