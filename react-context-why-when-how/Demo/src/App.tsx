import { DontCare } from "./components/DontCare";
import { Consumer } from "./components/Consumer";
import { ConsumerTwo } from "./components/ConsumerTwo";
import { NumberChanger } from "./components/NumberChanger";
import { RenderCounter } from "./components/RenderCounter";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Context Demo</h1>
      <RenderCounter>
        <DontCare />
        <RenderCounter>
          <DontCare />
          <DontCare />
        </RenderCounter>
        <Consumer>
          <DontCare />
        </Consumer>
        <Consumer>
          <RenderCounter>
            <DontCare />
            <Consumer />
            <ConsumerTwo />
          </RenderCounter>
        </Consumer>
        <NumberChanger />
      </RenderCounter>
    </div>
  );
}
