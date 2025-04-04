import styles from './FoodInput.module.css';
const FoodInput=({HandleKeyDown})=>{
    return (
      <input type="text" placeholder='Enter fruit ' className={styles.foodInput}
        onKeyDown={HandleKeyDown}
      />
    )
}
export default FoodInput;