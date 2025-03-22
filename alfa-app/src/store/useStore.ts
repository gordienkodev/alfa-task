import { create } from "zustand";
import { IBreedState } from "../interfaces";

export const useStore = create<IBreedState>((set) => ({
  breeds: [],
  images: {},
  setBreeds: (breeds) => set({ breeds }),
  setImages: (images) => set({ images }),
  likedBreeds: new Set(),
  toggleLike: (breedName) =>
    set((state) => {
      const updatedLikes = new Set(state.likedBreeds);
      if (updatedLikes.has(breedName)) {
        updatedLikes.delete(breedName);
      } else {
        updatedLikes.add(breedName);
      }
      return { likedBreeds: updatedLikes };
    }),
  filter: "all",
  setFilter: (filter) => set({ filter }),
  removeBreed: (breedName) =>
    set((state) => ({
      breeds: state.breeds.filter((breed) => breed !== breedName),
      images: Object.fromEntries(
        Object.entries(state.images).filter(([key]) => key !== breedName),
      ),
      likedBreeds: new Set(
        [...state.likedBreeds].filter((likedBreed) => likedBreed !== breedName),
      ),
    })),
  dataLoaded: false,
  markDataAsLoaded: () => set({ dataLoaded: true }),
  addBreed: (name: string, imageUrl: string) =>
    set((state) => ({
      breeds: [...state.breeds, name],
      images: { ...state.images, [name]: imageUrl },
    })),
}));
