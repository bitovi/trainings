/**
 * Improve the following component's UX by handling the different data fetching states:
 * loading, error, empty, success, revalidating.
 *
 * 1. Handle the error state
 *      Keep track of the error in the component’s local state. When there is an error,
 *      display the error message below the table.
 *
 * 2. Handle the loading state
 *       Keep track of loading in the component’s local state. When we are in a loading state,
 *       indicate it to the user. Modify the button onClick functions to not trigger when we
 *       are loading.
 *
 * 3. Handle the empty state
 *      Display a message to the user notifying them that no records were found if we have
 *      successfully completed our request and there is no data.
 *
 * 4. Handle the revalidating state
 *      Notify the user that the data on the page is being revalidated by applying the loading
 *      class to the tr in the table’s body.
 */

import { useEffect, useState } from "react";
import "./styles.css";

interface Person {
  name: string;
  age: number;
  occupation: string;
}

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | undefined>(undefined);
  const [data, setData] = useState<Array<Person> | undefined>(undefined);

  function fetchData(url: string) {
    setLoading(true);
    setError(undefined);
    fetch(url)
      .then(async (res) => {
        if (res.ok) return res.json();
        const err = await res.json();
        throw new Error(err.message);
      })
      .then((data) => setData(data))
      .catch((err) => {
        setError(err);
        setData(undefined);
      })
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchData("/api/people");
  }, []);

  return (
    <>
      <nav>
        <button
          type="button"
          onClick={() => !loading && fetchData("/api/people?revalidate=true")}
        >
          Reload data (revalidate)
        </button>
        <button
          type="button"
          onClick={() => !loading && fetchData("/api/people?error=true")}
        >
          Simulate error
        </button>
        <button
          type="button"
          onClick={() => !loading && fetchData("/api/people?empty=true")}
        >
          Simulate empty
        </button>
      </nav>

      <table>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Occupation</th>
          </tr>
        </thead>
        <tbody>
          {error || !data || data.length === 0
            ? null
            : data.map((person: Person) => (
                <tr key={person.name} className={loading ? "loading" : ""}>
                  <td>{person.name}</td>
                  <td>{person.age}</td>
                  <td>{person.occupation}</td>
                </tr>
              ))}
        </tbody>
      </table>

      {!loading && data?.length === 0 && <p>No records found</p>}
      {error && <p className="error">{error.message}</p>}
      {loading && !data && <p>Loading...</p>}
    </>
  );
}

export default App;
