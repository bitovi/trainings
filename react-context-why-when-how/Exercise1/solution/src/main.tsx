import { createRoot } from "react-dom/client";
import App from "./App";
import { UserProvider, UsersProvider } from "./providers";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");
const root = createRoot(rootElement);

root.render(
  <UserProvider>
    <UsersProvider>
      <App />
    </UsersProvider>
  </UserProvider>
);
