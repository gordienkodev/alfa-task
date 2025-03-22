import { useCartStore } from "../../store/useCartStore";
import { Link } from "react-router-dom"; 
import styles from './Cart.module.css';

export const Cart = () => {
  const { items } = useCartStore();
  const totalItems = Object.values(items).reduce((acc, count) => acc + count, 0);  

  return (
    totalItems > 0 && ( 
      <Link to="/cart" className={styles.cartButton}>
        Our Cart: ({totalItems})
      </Link>
    )
  );
};
