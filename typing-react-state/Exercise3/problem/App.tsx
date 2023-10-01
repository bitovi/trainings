// Make changes to the useRefs in order to correct TS errors
// Bonus question - What happens if we use useState
// instead of useRef?

import React, { useRef, useState } from "react";

const App = () => {
  const [fullName, setFullName] = useState("");

  const firstNameRef = useRef<string>(null);
  const lastNameRef = useRef({});

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const firstName = e.target.value;
    firstNameRef.current = firstName
      ? firstName.charAt(0).toUpperCase() + firstName.slice(1)
      : null;
    // Cannot assign to 'current' because it is a read-only property.
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const lastName = e.target.value;
    lastNameRef.current.lastName = lastName
      ? lastName.charAt(0).toUpperCase() + lastName.slice(1)
      : "";
    // Property 'lastName' does not exist on type '{}'.
  };

  const showFullNameClick = () => {
    const fullName =
      firstNameRef.current && lastNameRef.current.lastName
        ? `${firstNameRef.current} ${lastNameRef.current.lastName}`
        : "Incomplete Name";
    // Property 'lastName' does not exist on type '{}'.
    setFullName(fullName);
  };

  return (
    <>
      <div>
        First Name:
        <input onChange={handleFirstNameChange} />
      </div>
      <div>
        Last Name:
        <input onChange={handleLastNameChange} />
      </div>
      <div>
        <button onClick={showFullNameClick}>Show Full Name</button>
      </div>
      <div>Full Name: {fullName}</div>
    </>
  );
};

export default App;
