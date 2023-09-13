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
      <div>
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
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {error || !data || data.length === 0
            ? null
            : data.map((person: any) => (
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
