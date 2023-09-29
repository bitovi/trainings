
import "./styles.css";

function App() {

  interface ButtonProps {
    label: string;
    onClick: () => void;
  }
  
   const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
  }: ButtonProps) => {
    return <button onClick={() => onClick()}> {label} </button>;
  };
  

  return (
      <Button label="close" onClick={()=>{console.log("hiya")}} />
  );
}

export default App;
