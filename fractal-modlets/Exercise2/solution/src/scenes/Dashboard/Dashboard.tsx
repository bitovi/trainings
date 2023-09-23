import Widget2 from "./components/Widget2";
import Widget1 from "./components/Widget1"
import CustomButton from "../../shared/CustomButton/CustomButton";

import styles from "./Dashboard.module.css"

const DashboardScene = () => {
  return (
  <div>
    this is the dashboard scene! 
    <Widget1 />
    <Widget2 />
    <CustomButton />
  </div>
  )
}

export default DashboardScene