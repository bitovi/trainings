import React from 'react';
import './App.css'
import Toggle from './Toggle'
import { useToggle } from './useToggle';

function App() {
  const [on, toggle] = useToggle(true);

  return (
      <section>
        <h1>UseToggle</h1>
        <button disabled={on} onClick={() => toggle(true)}>
          Turn On
        </button>
        <button disabled={!on} onClick={() => toggle(false)}>
          Turn Off
        </button>
        <button onClick={toggle}>
          Toggle
        </button>
     
        <Toggle toggle={toggle} on={on} />
      </section>
  )
}

export default App
