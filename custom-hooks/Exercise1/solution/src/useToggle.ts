// write use toggle hook here. 

import { useState } from "react"

export const useToggle = (intialValue = true) : [boolean, (value?: unknown)=> void] => {
  const [on, setOn] = useState(intialValue)

  const handleToggle = (value?: unknown) => {
    typeof value == "boolean" ? setOn(value):
    setOn(!on)
  }
  return [on, handleToggle]
}