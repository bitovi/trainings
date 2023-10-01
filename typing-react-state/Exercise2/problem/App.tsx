// Correct the Action type so that TypeScript can
// catch errors in the second and third dispatch calls.
// If the Action type is correctly written -
//    - you will need to make changes to the second
//      dispatch call in order to correct the error
//      that TypeScript shows. Clicking the "Reset" button
//      should reset "name" to an empty string.
//    - TypeScript will complain about the “type” property
//      in the third dispatch call. This dispatch will
//      have to be deleted entirely.

import React, { useReducer } from "react";

type State = {
  name: string;
};

type Action = {
  type: string;
  payload: {
    name: string;
  };
};

const App = () => {
  function appReducer(state: State, action: Action): State {
    switch (action.type) {
      case "updateName":
        return { ...state, name: action.payload.name };
      case "reset":
        return { ...state, name: action.payload.name };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(appReducer, { name: "" });

  return (
    <>
      <button
        onClick={() =>
          dispatch({
            type: "updateName",
            payload: {
              name: "Michael P."
            }
          })
        }
      >
        Update Name
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "reset",
            payload: {
              name: "Something Fishy"
            }
          })
        }
      >
        Reset
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "randomType",
            payload: {
              name: "Not Correct"
            }
          })
        }
      >
        Is this right?
      </button>
      <div>{state?.name}</div>
    </>
  );
};

export default App;
