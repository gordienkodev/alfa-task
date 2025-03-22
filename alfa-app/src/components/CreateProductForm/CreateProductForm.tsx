import { useState } from "react";
import styles from "./CreateProductForm.module.css";
import FormInput from "../FormInput/FormInput";

interface CreateProductFormProps {
  onSubmit: (name: string, imageUrl: string) => void;
}

const CreateProductForm: React.FC<CreateProductFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [errors, setErrors] = useState<{ name?: string; imageUrl?: string }>(
    {},
  );

  const isValidImageUrl = (url: string) => /\.(jpg|jpeg|png|gif)$/i.test(url);

  const validateForm = () => {
    const newErrors: { name?: string; imageUrl?: string } = {};
    if (!name) newErrors.name = "Name is required";
    else if (!/^[А-ЯA-Z]/.test(name))
      newErrors.name = "Name must start with a capital letter";

    if (!imageUrl) newErrors.imageUrl = "Image URL is required";
    else if (!isValidImageUrl(imageUrl))
      newErrors.imageUrl = "Invalid image URL";

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    onSubmit(name, imageUrl);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <FormInput
        id="name"
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        error={errors.name}
      />
      <FormInput
        id="imageUrl"
        label="Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        error={errors.imageUrl}
      />
      <button type="submit" className={styles.submitButton}>
        Add Breed
      </button>
    </form>
  );
};

export default CreateProductForm;
