/*

Exercise:

1) Announce the existing error, loading, and “no records” states to screenreaders.
2) Add a new paragraph that tells screenreaders when the data has been reloaded.
3) Use `aria-busy` to visually indicate when the table is being reloaded.

The tests should pass after completing the steps above.

*/
import React, { useEffect, useState } from "react";
import { fetch } from "./fetch";
import "./styles.css";

interface Person {
  age: number;
  name: string;
  occupation: string;
}

function App() {
  const [data, setData] = useState<Array<Person> | undefined>(undefined);
  const [error, setError] = useState<Error | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData("/api/people");
  }, []);

  function fetchData(url: string) {
    if (!loading) {
      setError(undefined);
      setLoading(true);
      fetch(`${window.location.origin}${url}`)
        .then(async (response) => {
          if (!response.ok) {
            const responseError = await response.json();
            setError(responseError);
          }
          return response.json();
        })
        .then((data) => setData(data))
        .catch((caughtError) => {
          setData(undefined);
          setError(caughtError);
        })
        .finally(() => setLoading(false));
    }
  }

  return (
    <>
      <nav>
        <button
          onClick={() => fetchData("/api/people?revalidate=true")}
          type="button"
        >
          Reload data (revalidate)
        </button>
        <button
          onClick={() => fetchData("/api/people?error=true")}
          type="button"
        >
          Simulate error
        </button>
        <button
          onClick={() => fetchData("/api/people?empty=true")}
          type="button"
        >
          Simulate empty
        </button>
      </nav>

      {error ? (
        <p className="error">{error.message}</p>
      ) : null}

      {loading ? (
        <p>Loading…</p>
      ) : null}

      {data ? (
        data.length === 0 ? (
          <>
            {!loading && <p>No records found.</p>}
          </>
        ) : (
          <>
            <table>
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Age</th>
                  <th scope="col">Occupation</th>
                </tr>
              </thead>
              <tbody>
                {data.map((person: Person) => (
                  <tr key={person.name}>
                    <th scope="row">{person.name}</th>
                    <td>{person.age}</td>
                    <td>{person.occupation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )
      ) : null}
    </>
  );
}

export default App;
