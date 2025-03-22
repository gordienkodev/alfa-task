import { Link } from "react-router-dom";
import { useCartStore } from "../store/useCartStore";

function CartPage() {
  const { items } = useCartStore();

  return (
    <>
      <h1>Our CartPage</h1>

      {items && Object.keys(items).length > 0 ? (
        <ul>
          {Object.entries(items).map(([breedName, count]) => (
            <li key={breedName}>
              <strong>{breedName}</strong>: {count}
            </li>
          ))}
        </ul>
      ) : ( 
        <p>No breeds available or images not loaded.</p>
 
      )}

      
<Link to="/products">
        Go to Breeds Page
        </Link>
    </>
  );
}

export default CartPage;
