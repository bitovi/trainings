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

import React, { useEffect, useState } from "react";
import "./styles.css";

interface Person {
  name: string;
  age: number;
  occupation: string;
}

function App() {
  const [data, setData] = useState<Array<Person> | undefined>(undefined);

  function fetchData(url: string) {
    fetch(url)
      .then(async (res) => res.json())
      .then((data) => setData(data));
  }

  useEffect(() => {
    fetchData("/api/people");
  }, []);

  return (
    <>
      <nav>
        <button
          type="button"
          onClick={() => fetchData("/api/people?revalidate=true")}
        >
          Reload data (revalidate)
        </button>
        <button
          type="button"
          onClick={() => fetchData("/api/people?error=true")}
        >
          Simulate error
        </button>
        <button
          type="button"
          onClick={() => fetchData("/api/people?empty=true")}
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
          {!data || data.length === 0
            ? null
            : data.map((person: Person) => (
                <tr key={person.name}>
                  <td>{person.name}</td>
                  <td>{person.age}</td>
                  <td>{person.occupation}</td>
                </tr>
              ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
