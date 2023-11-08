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
  const [reloading, setReloading] = useState(false);

  useEffect(() => {
    fetchData(false, "/api/people");
  }, []);

  function fetchData(reloading: boolean, url: string) {
    if (!loading) {
      setError(undefined);
      setLoading(true);
      setReloading(reloading);
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
          onClick={() => fetchData(true, "/api/people?revalidate=true")}
          type="button"
        >
          Reload data (revalidate)
        </button>
        <button
          onClick={() => fetchData(false, "/api/people?error=true")}
          type="button"
        >
          Simulate error
        </button>
        <button
          onClick={() => fetchData(false, "/api/people?empty=true")}
          type="button"
        >
          Simulate empty
        </button>
      </nav>

      {error ? (
        <p className="error" aria-live="polite" role="region">{error.message}</p>
      ) : null}

      {loading ? (
        <p aria-live="polite" className={data && data.length > 0 ? "sr-only" : ""} role="region">Loading…</p>
      ) : null}

      {data ? (
        data.length === 0 ? (
          <>
            {!loading && <p aria-live="polite" role="region">No records found.</p>}
          </>
        ) : (
          <>
            {!loading && reloading && <p aria-live="polite" className="sr-only" role="region">Reloaded data.</p>}
            <table>
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Age</th>
                  <th scope="col">Occupation</th>
                </tr>
              </thead>
              <tbody aria-busy={loading}>
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
