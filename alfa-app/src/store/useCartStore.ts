import { create } from "zustand";
import { ICartState } from "../interfaces";

export const useCartStore = create<ICartState>((set) => ({
  items: {},
  increaseCount: (breedName) =>
    set((state) => ({
      items: {
        ...state.items,
        [breedName]: (state.items[breedName] || 0) + 1,
      },
    })),
  decreaseCount: (breedName) =>
    set((state) => ({
      items: {
        ...state.items,
        [breedName]: Math.max((state.items[breedName] || 0) - 1, 0),
      },
    })),
  removeFromCart: (breedName) =>
    set((state) => {
      const updatedItems = { ...state.items };
      delete updatedItems[breedName];
      return { items: updatedItems };
    }),
}));
