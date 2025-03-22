import { CartButtonProps } from "../../interfaces";
import { useCartStore } from "../../store/useCartStore";
import styles from "./CartButton.module.css";

export const CartButton: React.FC<CartButtonProps> = ({ breedName }) => {
  const { items, increaseCount, decreaseCount } = useCartStore();

  const count = items[breedName] || 0;

  const handleIncrease = (event: React.MouseEvent) => {
    event.preventDefault();
    increaseCount(breedName);
  };

  const handleDecrease = (event: React.MouseEvent) => {
    event.preventDefault();
    decreaseCount(breedName);
  };

  return (
    <div className={styles.cartButton}>
      <button onClick={handleDecrease} disabled={count === 0}>
        -
      </button>
      <span>{count}</span>
      <button onClick={handleIncrease}>+</button>
    </div>
  );
};
