import SearchBarThing from "./SearchBarThing";
import MapThing from "./MapThing";
import WidgetButtons from "./WidgetButtons"

import styles from "./Widget2.module.css";

const Widget2 = () => {
  return (
    <div>
      This is a widget for the dashboard!
      <SearchBarThing />
      <MapThing />
      <WidgetButtons />
    </div>
  );
};

export default Widget2;
