import BreedList from "../components/BreedList/BreedList";
import BreedFilter from "../components/BreedFilter/BreedFilter";
import DataLoader from "../components/DataLoader";
import { useStore } from "../store/useStore";
import AddProductButton from "../components/AddProductButton/AddProductButton";
import { Cart } from "../components/Cart/Cart";
import styles from "./BreedsPage.module.css";

function BreedsPage() {
  const { breeds, images } = useStore();

  return (
    <>
      <div className={styles.header}>
        <h1>Dog Breeds</h1>
        <Cart />
      </div>
      <div>
        <BreedFilter />
        <AddProductButton />
      </div>
      <DataLoader />
      {breeds && images && Object.keys(images).length > 0 ? (
        <BreedList breeds={breeds} images={images} />
      ) : (
        <p>No breeds available or images not loaded.</p>
      )}
    </>
  );
}

export default BreedsPage;
