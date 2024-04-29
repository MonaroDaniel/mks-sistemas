import { create } from "zustand";
import { Product } from "./types";

type CartStore = {
  cart: Product[];
  addToCart: (item: Product) => void;
  removeOneProductFromCart: (item: Product) => void;
  removeThatProductFromCart: (id: number) => void;
  finishCart: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
  cart: [],
  addToCart: (product) => set((state) => ({ cart: verifyProductAlreadyExistsInCart("add", state.cart, product) })),
  removeOneProductFromCart: (product) => set((state) => ({ cart: verifyProductAlreadyExistsInCart("remove", state.cart, product) })),
  removeThatProductFromCart: (id) =>
    set((state) => ({ cart: state.cart.filter((product) => product.id !== id) })),
  finishCart: () => set(() => ({ cart: [] }))
}))

function verifyProductAlreadyExistsInCart(type: 'add' | 'remove', array: Product[], newObj: Product) {
  const index: number = array.findIndex(itemArray => itemArray.id === newObj.id)
  if (index !== -1) {
    if (type === 'add') {
      array[index].count++
    } else {
      array[index].count--
    }
  } else {
    array.push({ ...newObj, count: 1 })
  }
  return [...array]
}