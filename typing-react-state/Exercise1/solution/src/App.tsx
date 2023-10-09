/*

Exercise:

1) Fix the `companyDescription` state to allow a string or null value.
2) Add an interface for the `companyDetails` state.
3) Fix the `companyName` state to infer the correct type.
4) Add the correct type for the `employees` state.
5) Fix the values used when the “Reset company details” button is triggered.

*/

import React, { useEffect, useState } from "react";

interface CompanyDetailProps {
  departments: string[];
  owner: string;
  size: number;
};

const App = () => {
  const [companyDescription, setCompanyDescription] = useState<string | null>(
    null
  );
  const [companyDetails, setCompanyDetails] = useState<CompanyDetailProps>({
    departments: [],
    owner: "",
    size: 0,
  });
  const [companyName, setCompanyName] = useState("");
  const [employees, setEmployees] = useState<string[]>();

  useEffect(() => {
    setCompanyName("ABC Inc.");

    setCompanyDescription("Paper and office supplies wholesale company");

    setCompanyDetails({
      size: 15,
      owner: "Michael P.",
      departments: ["React", "Angular", "DevOps"]
    });

    setEmployees(["Alice", "Bob", "Cathy"]);
  }, []);

  return (
    <form>
      <fieldset>
        <legend>Description</legend>
        <dl>
          <dt>Company name</dt>
          <dd><p>{companyName}</p></dd>
          <dt>Company description</dt>
          <dd><p>{companyDescription ? companyDescription : "No description."}</p></dd>
        </dl>
        <p>
          <button onClick={() => setCompanyDescription(null)} type="button">
            Reset company description
          </button>
        </p>
      </fieldset>
      <fieldset>
        <legend>Details</legend>
        <dl>
          <dt>Size</dt>
          <dd><p>{companyDetails.size}</p></dd>
          <dt>Owner</dt>
          <dd><p>{companyDetails.owner || "Owner unknown."}</p></dd>
          <dt>Departments</dt>
          <dd>
            {companyDetails.departments.length > 0 ? (
              <ul>
                {companyDetails.departments?.map((department) => {
                  return <li key={department}>{department}</li>;
                })}
              </ul>
            ) : (
              <p>No departments.</p>
            )}
          </dd>
        </dl>
        <p>
          <button
            onClick={() =>
              setCompanyDetails({
                size: 0,
                owner: "",
                departments: []
              })
            }
            type="button"
          >
            Reset company details
          </button>
        </p>
      </fieldset>
      <fieldset>
        <legend>Employee list</legend>
        {employees && employees.length > 0 ? (
          <ul>
            {employees?.map((employee) => {
              return <li key={employee}>{employee}</li>;
            })}
          </ul>
        ) : (
          <p>No employees.</p>
        )}
        <p>
          <button onClick={() => setEmployees(undefined)} type="button">
            Reset employee list
          </button>
        </p>
      </fieldset>
    </form>
  );
};

export default App;
