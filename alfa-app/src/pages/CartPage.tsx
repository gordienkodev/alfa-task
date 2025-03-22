import { Link } from "react-router-dom";
import { useCartStore } from "../store/useCartStore";
import styles from './CartPage.module.css'; 

function CartPage() {
  const { items } = useCartStore();

  return (
    <>
      <h1 className={styles.pageTitle}>Our Cart</h1>

      {items && Object.keys(items).length > 0 ? (
        <ul className={styles.cartList}>
          {Object.entries(items).map(([breedName, count]) => (
            <li key={breedName} className={styles.cartItem}>
              <strong className={styles.breedName}>
                {breedName} 
              </strong>: <span className={styles.itemCount}>Added: {count}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.noItems}>No breeds available or images not loaded.</p>
      )}

      <Link to="/products" className={styles.link}>
        Go to Breeds Page
      </Link>
    </>
  );
}

export default CartPage;
