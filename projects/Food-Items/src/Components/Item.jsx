import styles from './Item.module.css';

const Item = ({ foodItem ,bought,HandleBuyButtonClicked}) => { 
 

 
  return (
    <li className={`${styles["kg-item"]} list-group-item ${bought && "active" }`}>
      <span className={styles["kg-span"]}>{foodItem}</span>
      <button className={`${styles.button} btn btn-info`} 
        onClick={HandleBuyButtonClicked}
  
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
