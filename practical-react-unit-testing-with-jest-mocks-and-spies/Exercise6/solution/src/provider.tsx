import {
  createContext,
} from "react";

const CowbirdContext = createContext({ cbFetch: window.fetch });

export default CowbirdContext;