import "./App.css";
import Car from "./components/Car";
import { useReducer } from "react";

const initState = {
  isSwitchedOn: false,
  speed: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "banana":
      if (state.isSwitchedOn === false) {
        state = {
          ...state,
          speed: 0,
        };
      }
      state = {
        ...state,
        isSwitchedOn: !state.isSwitchedOn,
      };
      break;
    case "accelerate":
      state = {
        ...state,
        speed: state.speed + 5,
      };
      break;
    case "brake":
      if (state.speed >= 5) {
        state = {
          ...state,
          speed: state.speed - 5,
        };
      } else {
        alert("Du kannst nicht unter null Km/h fahren");
      }
      break;
    case "machtNull":
      state = {
        ...state,
        speed: 0,
      };
      break;

    default:
      console.warn("unknown action");
  }
  return state;
};

function App() {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <div className="App">
      <Car state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
