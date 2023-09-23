import SomeGraph1 from "./components/SomeGraph1/SomeGraph1";
import SomeControlPanel1 from "./components/SomeControlPanel1/SomeControlPanel1";

const Widget1 = () => {
  return (
    <div>
      This is a widget for the dashboard!
      <SomeControlPanel1 />
      <SomeGraph1 />
    </div>
  );
};

export default Widget1