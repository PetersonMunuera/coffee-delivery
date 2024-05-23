import { ReactNode, createContext, useState } from 'react'
import { Product } from '../@types/product'

export interface CartProduct extends Product {
  amount: number
}

interface CartContextType {
  cartProducts: CartProduct[]
  addProductToCart: (product: CartProduct) => void
  updateProductAmount: (productId: string, newAmount: number) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([])

  function addProductToCart(product: CartProduct) {
    const productAlredyAdded = cartProducts.find(
      (cartProduct) => cartProduct.id === product.id,
    )

    if (!productAlredyAdded) {
      setCartProducts((state) => [...state, product])
    }
  }

  function updateProductAmount(productId: string, newAmount: number) {
    const productToUpdateIndex = cartProducts.findIndex(
      (product) => product.id === productId,
    )

    if (productToUpdateIndex > -1) {
      const updatedProducts = [...cartProducts]

      updatedProducts[productToUpdateIndex].amount = newAmount

      setCartProducts(updatedProducts)
    }
  }

  return (
    <CartContext.Provider
      value={{ cartProducts, addProductToCart, updateProductAmount }}
    >
      {children}
    </CartContext.Provider>
  )
}
