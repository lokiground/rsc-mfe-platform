import { create } from "zustand";

interface Product {
  id: string;
  name: string;
  price: number;
}

interface CartStore {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  addItem: (product) =>
    set((state) => ({
      items: [...state.items, product],
    })),
  removeItem: (productId) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== productId),
    })),
}));
