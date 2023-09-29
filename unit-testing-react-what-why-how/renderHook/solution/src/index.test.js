import {useLoggedInUser} from './index.js'

// renderHook’s return value is actually the “result.current”

test('returns logged in user', () => {
  const {result} = renderHook(() => useLoggedInUser())
  expect(result.current).toEqual({name: 'Alice'})
})

