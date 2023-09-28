import styles from "./WidgetButtons.module.css"
import CustomButton from "../../../../shared/CustomButton/CustomButton"
const WidgetButtons = () =>{
  return(
    <div>
      This is a shared set of Buttons for all the Different Dashboard Widgets!
      <CustomButton/>
      <CustomButton/>
      <CustomButton/>
    </div>
  )
}

export default WidgetButtons