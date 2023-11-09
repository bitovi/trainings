import React, { FormEvent, useId, useRef, useState } from "react";

interface FormState {
  firstName: string | undefined;
  isValid: boolean;
  lastName: string | undefined;
}

const App = () => {
  const firstNameErrorId = useId();
  const firstNameRef = useRef<HTMLInputElement>(null);
  const [firstNameValue, setFirstNameValue] = useState("");

  const [submittedFormState, setSubmittedFormState] = useState<FormState>();

  const lastNameErrorId = useId();
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
      firstNameRef.current.checkValidity() === false
    ) {
      firstNameRef.current.focus();
    } else if (
      lastNameRef.current &&
      lastNameRef.current.checkValidity() === false
    ) {
      lastNameRef.current.focus();
    }
  }

  function setSuccessRef(element: HTMLParagraphElement) {
    if (element) {
      element.focus();
    }
  }

  return (
    <>
      {submittedFormState?.isValid ? (
        <p ref={setSuccessRef} tabIndex={0}>
          Success! You’ve submitted the form with this full name:{" "}
          {`${firstNameValue} ${lastNameValue}`}
        </p>
      ) : (
        <form noValidate onSubmit={handleSubmit}>
          <p>
            <label>
              First name:
              <input
                aria-describedby={firstNameErrorId}
                aria-invalid={
                  submittedFormState
                    ? !firstNameRef.current?.validity.valid
                    : undefined
                }
                onChange={(event) => {
                  setFirstNameValue(event.target.value);
                }}
                ref={firstNameRef}
                required
              />
            </label>
          </p>
          {submittedFormState && !firstNameRef.current?.validity.valid ? (
            <p className="error" id={firstNameErrorId}>
              The “first name” field is required.
            </p>
          ) : null}

          <p>
            <label>
              Last name:
              <input
                aria-describedby={lastNameErrorId}
                aria-invalid={
                  submittedFormState
                    ? !lastNameRef.current?.validity.valid
                    : undefined
                }
                onChange={(event) => {
                  setLastNameValue(event.target.value);
                }}
                ref={lastNameRef}
                required
              />
            </label>
          </p>
          {submittedFormState && !lastNameRef.current?.validity.valid ? (
            <p className="error" id={lastNameErrorId}>
              The “last name” field is required.
            </p>
          ) : null}

          <p>
            <button type="submit">Validate full name</button>
          </p>
        </form>
      )}
    </>
  );
};

export default App;
