import "./styles.css";
import { RenderCounter } from "./components/RenderCounter";
import { ReloadUsers } from "./components/ReloadUsers";
import { UserList } from "./components/UserList";
import { CurrentUser } from "./components/CurrentUser";

/**
 * Rework the provider so the CurrentUser
 * does not update when the users are reloaded
 *
 */

export default function App() {
  return (
    <div className="App">
      <h1>Context Demo</h1>
      <RenderCounter>
        <CurrentUser />
        <ReloadUsers />
        <UserList />
      </RenderCounter>
    </div>
  );
}
