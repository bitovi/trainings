/*

Exercise:

1) Fix the `event` argument’s type for `buttonOnClickHandler`.
2) Add a <button> that can trigger `formOnSubmitHandler`.
3) Fix the `event` argument’s type for `handleChange`.

*/

import React, { FormEvent, useState } from 'react';

const App = () => {
  const [fields, setFields] = useState({
    description: "",
    title: "",
  });

  function buttonOnClickHandler(event: never) {
    alert(`Button received event with type and coordinates: ${event.type} (${event.clientX}, ${event.clientY})`);
  }

  function formOnSubmitHandler(event: FormEvent) {
    event.preventDefault();

    alert(`Form received event with type: ${event.type}`);
  }

  function handleChange(event: never) {
    setFields({
      ...fields,
      [event.target.name]: event.target.value
    });
  }

  return (
    <form onSubmit={formOnSubmitHandler}>
      <p>
        <label>
          Title:
          <input name="title" onChange={handleChange} />
        </label>
      </p>
      <p>
        <label>
          Description:
          <textarea name="description" onChange={handleChange} />
        </label>
      </p>
      <p>
        <button onClick={buttonOnClickHandler} type="button">
          Submit (<code>type="button"</code>)
        </button>
      </p>
      <p>
        {/* Add a button to submit the form here. */}
      </p>
    </form>
  );
}

export default App;