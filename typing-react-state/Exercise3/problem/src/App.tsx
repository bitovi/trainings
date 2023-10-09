/*

Exercise:

1) Add types to all of the local state variables.
2) Fix the type for `previousFullName` so it is mutable.

Bonus question: what happens if we replace useRef with useState?

*/

import React, { FormEvent, useRef, useState } from "react";

const App = () => {
  const firstNameRef = useRef();
  const [firstNameValue, setFirstNameValue] = useState();

  const lastNameRef = useRef();
  const [lastNameValue, setLastNameValue] = useState();

  const previousFullName = useRef<string>(null);

  const fullName = firstNameValue && lastNameValue ? `${firstNameValue} ${lastNameValue}` : "";

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    // Give focus to the first input element that isn’t valid
    if (firstNameRef.current && firstNameRef.current.checkValidity() === false) {
      firstNameRef.current.focus();
    } else if (lastNameRef.current && lastNameRef.current.checkValidity() === false) {
      lastNameRef.current.focus();
    }

    // Let the user know they’ve updated the full name
    if (previousFullName.current !== fullName) {
      if (fullName) {
        alert(`Update full name from “${previousFullName.current || ""}” to “${fullName}”`);
      }
      previousFullName.current = fullName;
    }
  }

  return (
    <form noValidate onSubmit={handleSubmit}>
      <p>
        <label>
          First name:
          <input id="firstName" onChange={event => { setFirstNameValue(event.target.value) }} ref={firstNameRef} required />
        </label>
      </p>
      <p>
        <label>
          Last name:
          <input id="lastName" onChange={event => { setLastNameValue(event.target.value) }} ref={lastNameRef} required />
        </label>
      </p>
      <p>
        <button type="submit">Validate full name</button>
      </p>
      <hr />
      <p>
        {"Full name: "}
        <output htmlFor="firstName lastName">{fullName || "incomplete name"}</output>
      </p>
    </form>
  );
};

export default App;
