import { FaHeart, FaTrash } from "react-icons/fa";
import { IBreedCardProps } from "../../interfaces";
import { Link } from "react-router-dom";
import { CartButton } from "../CartButton/CartButton";
import { useStore } from "../../store/useStore";
import styles from "./BreedCard.module.css";

const BreedCard: React.FC<IBreedCardProps> = ({ breedName, imageUrl }) => {
  const { likedBreeds, toggleLike, removeBreed } = useStore();
  const isLiked = likedBreeds.has(breedName);

  const handleLike = (event: React.MouseEvent) => {
    event.preventDefault();
    toggleLike(breedName);
  };

  const handleDelete = (event: React.MouseEvent) => {
    event.preventDefault();
    removeBreed(breedName);
  };

  return (
    <Link to={`/products/${breedName}`} className={styles.breedCard}>
      <h2 className={styles.breedTitle}>{breedName}</h2>
      {imageUrl && (
        <img src={imageUrl} alt={breedName} className={styles.breedImage} />
      )}
      <div className={styles.iconContainer}>
        <div
          className={`${styles.likeIcon} ${isLiked ? styles.liked : ""}`}
          onClick={handleLike}
        >
          <FaHeart size={28} />
        </div>
        <div className={styles.deleteIcon} onClick={handleDelete}>
          <FaTrash size={28} />
        </div>
      </div>

      <CartButton breedName={breedName} />
    </Link>
  );
};

export default BreedCard;
