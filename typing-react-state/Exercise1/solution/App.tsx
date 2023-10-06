// Add/Correct the types and get rid of TypeScript errors
// Things to take care of -
//  - companyDescription should be allowed to be set to null
//  - The "Reset Company Details" button has a setCompanyDetails call. Something here
//    will have to be changed after you have added the correct type to the
//    useState hook for companyDetails.

import "./styles.css";
import React, { useState, useEffect } from "react";

interface CompanyDetailProps {
  size: number;
  owner: string;
  departments: string[];
};

const App = () => {
  const [companyName, setCompanyName] = useState("");
  const [companyDescription, setCompanyDescription] = useState<string | null>(
    null
  );
  const [companyDetails, setCompanyDetails] = useState<CompanyDetailProps>({
    size: 0,
    owner: "",
    departments: []
  });
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
    <>
      <section>Company Name: {companyName}</section>
      <section>
        Company Description:{" "}
        {companyDescription ? companyDescription : "No description"}
        <div>
          <button onClick={() => setCompanyDescription(null)}>
            Reset Company Description
          </button>
        </div>
      </section>
      <section>
        <div> Size: {companyDetails.size} </div>

        <div>
          <div> Owner: {companyDetails.owner || " Not Known"} </div>
        </div>

        <div>
          Departments:
          {companyDetails.departments?.map((department) => (
            <div key={department}>{department}</div>
          ))}
          {/* Property 'departments' does not exist on type '{}'. */}
        </div>
        <div>
          <button
            onClick={() =>
              setCompanyDetails({
                size: 0,
                owner: "",
                departments: []
              })
            }
          >
            Reset Company Details
          </button>
        </div>
      </section>
      <section>
        Employee List:
        {employees ? (
          employees?.map((employee) => <div key={employee}>{employee}</div>)
        ) : (
          <div>No employees</div>
        )}
        <div>
          <button onClick={() => setEmployees(undefined)}>
            Reset Employee List
          </button>
        </div>
      </section>
    </>
  );
};

export default App;
