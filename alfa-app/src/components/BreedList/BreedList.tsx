import { IBreedListProps } from "../../interfaces";
import BreedCard from "../BreedCard/BreedCard";
import { useStore } from "../../store/useStore";
import styles from "./BreedList.module.css";

const BreedList: React.FC<IBreedListProps> = ({
  breeds,
  images,
}: IBreedListProps) => {
  const { likedBreeds, filter } = useStore();

  const filteredBreeds =
    filter === "liked"
      ? breeds.filter((breed) => likedBreeds.has(breed))
      : breeds;

  return (
    <div className={styles.breedListContainer}>
      {filteredBreeds &&
        filteredBreeds.map((breedName) => (
          <BreedCard
            key={breedName}
            breedName={breedName}
            imageUrl={images && images[breedName]}
          />
        ))}
    </div>
  );
};

export default BreedList;
