import { FC } from "react";

interface ToggleProps {
  on: boolean;
  toggle: () => void;
}
const Toggle: FC<ToggleProps> = ({on, toggle}) => {


  return (
    <div>
      <label className="toggle">
        <input
          onChange={toggle}
          className="toggle-checkbox"
          type="checkbox"
          checked={on}
        />
        <div className="toggle-switch"></div>
        <span className="toggle-label">{on ? "On" : "Off"}</span>
      </label>
    </div>
)}

export default Toggle