import SomeGraph1 from "./SomeGraph1";
import SomeControlPanel1 from "./SomeControlPanel1";

import styles from "./Widget1.module.css"

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