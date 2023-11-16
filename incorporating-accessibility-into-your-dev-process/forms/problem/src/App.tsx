/*

Exercise:

1) If a field is invalid, show an error under the field only after the form has been submitted at least once.
2) Use `aria-describedby` and `aria-invalid` attributes on the inputs.
3) After the form is successfully submitted, give focus to the “success” paragraph.

The tests should pass after completing the steps above.

*/
import React, { FormEvent, useRef, useState } from "react";

interface FormState {
  firstName: string | undefined;
  isValid: boolean;
  lastName: string | undefined;
}

const App = () => {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const [firstNameValue, setFirstNameValue] = useState("");

  const [submittedFormState, setSubmittedFormState] = useState<FormState>();

  const lastNameRef = useRef<HTMLInputElement>(null);
  const [lastNameValue, setLastNameValue] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    // Keep track of when the form has been submitted
    setSubmittedFormState({
      firstName: firstNameRef.current?.value,
      isValid: (event.target as HTMLFormElement).checkValidity(),
      lastName: firstNameRef.current?.value,
    });

    // Give focus to the first input element that isn’t valid
    if (
      firstNameRef.current &&
      firstNameRef.current.validity.valid === false
    ) {
      firstNameRef.current.focus();
    } else if (
      lastNameRef.current &&
      lastNameRef.current.validity.valid === false
    ) {
      lastNameRef.current.focus();
    }
  }

  return (
    <>
      {submittedFormState?.isValid ? (
        <p>
          Success! You’ve submitted the form with this full name:{" "}
          {`${firstNameValue} ${lastNameValue}`}
        </p>
      ) : (
        <form noValidate onSubmit={handleSubmit}>
          <p>
            <label>
              First name:
              <input
                onChange={(event) => {
                  setFirstNameValue(event.target.value);
                }}
                ref={firstNameRef}
                required
              />
            </label>
          </p>

          <p>
            <label>
              Last name:
              <input
                onChange={(event) => {
                  setLastNameValue(event.target.value);
                }}
                ref={lastNameRef}
                required
              />
            </label>
          </p>

          <p>
            <button type="submit">Validate full name</button>
          </p>
        </form>
      )}
    </>
  );
};

export default App;
