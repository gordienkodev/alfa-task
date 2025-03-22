export interface IBreedListType {
  [key: string]: string[];
}

export interface IBreedListProps {
  breeds: string[];
  images: Record<string, string>;
}

export interface IErrorProps {
  message: string;
}

export interface IBreedImage {
  message: string;
  status: string;
}

export interface IBreedCardProps {
  breedName: string;
  imageUrl?: string;
}

type TFilter = "all" | "liked";

export interface IBreedState {
  breeds: string[];
  images: Record<string, string>;
  likedBreeds: Set<string>;
  toggleLike: (breedName: string) => void;
  filter: TFilter;
  setFilter: (filter: TFilter) => void;
  setBreeds: (breeds: string[]) => void;
  setImages: (images: Record<string, string>) => void;
  removeBreed: (breedName: string) => void;
  markDataAsLoaded: () => void;
  dataLoaded: boolean;
  addBreed: (name: string, imageUrl: string) => void;
}

export interface ICartState {
  items: Record<string, number>;
  increaseCount: (breedName: string) => void;
  decreaseCount: (breedName: string) => void;
  removeFromCart: (breedName: string) => void;
}


export interface CartButtonProps {
  breedName: string;
}