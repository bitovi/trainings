import SearchBarThing from "./components/SearchBarThing/SearchBarThing";
import MapThing from "./components/MapThing/MapThing";
import WidgetButtons from "../../shared/WidgetButtons"

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
