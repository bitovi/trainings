import React from 'react';
import './App.css'
import Toggle from './Toggle'

function App() {

  return (
      <section>
        <h1>UseToggle</h1>
        <button disabled={true} onClick={()=>{}}>
          Turn On
        </button>
        <button disabled={true} onClick={()=>{}}>
          Turn Off
        </button>
        <button onClick={()=>{}}>
          Toggle
        </button>
     
        <Toggle toggle={()=>{}} on={true} />
      </section>
  )
}

export default App
