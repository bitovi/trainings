import { renderHook } from '@testing-library/react-hooks'
import {useLoggedInUser} from './index.tsx'


// renderHook’s return value is actually the “result.current”

test('returns logged in user', () => {
  const {result} = renderHook(() => useLoggedInUser())
  expect(result.current).toEqual({name: 'Alice'})
})

