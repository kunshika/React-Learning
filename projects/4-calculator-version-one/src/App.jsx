import styles from "./App.module.css";
import ButtonsContainer from "./Components/ButtonsContainer.jsx";
import Display from "./Components/Display.jsx";
function App() {
  return (
    <div className={styles.calculator}>
      <Display/>
      <ButtonsContainer/>
    </div>
  );
}

export default App;