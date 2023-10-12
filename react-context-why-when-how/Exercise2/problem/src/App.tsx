import "./styles.css";
import { AnimalWrapper } from "./components/animals/Animals";

/**
 * Change the Animals to use context
 */

export default function App() {
  return (
    <div className="App">
      <h1>Exercise: Props to Context</h1>
      <AnimalWrapper />
    </div>
  );
}
