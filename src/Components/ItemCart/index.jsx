import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import styles from './styles.module.scss'

export const ItemCart = ({ item }) => {
  const { editItemToCart} = useContext(CartContext);
  const {amount} = item;
  
  return (
    <div className={styles.cartItem}>
      <img src={item.img} alt={item.name} />
      <div className={styles.dataContainer}>
        <div className={styles.left}>
          <p>{item.name}</p>
          <div className={styles.buttons}>
            <button onClick={()=> editItemToCart(item._id,"add",amount)}>Agregar</button>
            <button onClick={()=> editItemToCart(item._id,"del",amount)}>Quitar</button>
          </div>
        </div>
        <div>
          <div className={styles.right}>
            <p>Cantidad {item.amount}</p>
            <p>Total: ${item.amount * item.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
