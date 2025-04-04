import styles from "./App.module.css";
import ButtonsContainer from "./Components/ButtonsContainer.jsx";
import Display from "./Components/Display.jsx";
import {useState} from"react";
function App() {

  const [CalVal,setCalVal]=useState("");
  const onButtonClick=(buttonText)=>{
    console.log(buttonText);
    if(buttonText==="C"){
      setCalVal("");
    }  
    else if(buttonText=='='){
       const result =eval(CalVal);
       setCalVal(result);
    }
    else{
      const newDisplayVal=CalVal+buttonText;
      setCalVal(newDisplayVal);
    }
  }
  return (
    <div className={styles.calculator}>
      <Display displayVal={CalVal}></Display>
      <ButtonsContainer onButtonClick={onButtonClick} ></ButtonsContainer>
    </div>
  );
}

export default App;