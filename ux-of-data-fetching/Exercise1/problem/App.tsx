import { useEffect, useState } from "react";
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
      <div>
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
          {!data || data.length === 0
            ? null
            : data.map((person: any) => (
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
