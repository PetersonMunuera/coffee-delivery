import { ReactNode, createContext, useState } from 'react'
import { Product } from '../@types/product'
import { toast } from 'react-toastify'

export interface CartProduct extends Product {
  amount: number
}

interface CartContextType {
  cartProducts: CartProduct[]
  addProductToCart: (product: CartProduct) => void
  updateProductAmount: (productId: string, newAmount: number) => void
  removeProduct: (productId: string) => void
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
      toast.success(`${product.amount}x ${product.name} adicionado ao carrinho`)
    } else {
      toast.error(`${product.name} já está no carrinho`)
    }
  }

  function updateProductAmount(productId: string, newAmount: number) {
    if (newAmount < 1) return

    const productToUpdateIndex = cartProducts.findIndex(
      (product) => product.id === productId,
    )

    if (productToUpdateIndex > -1) {
      const updatedProducts = [...cartProducts]

      updatedProducts[productToUpdateIndex].amount = newAmount

      setCartProducts(updatedProducts)
    }
  }

  function removeProduct(productId: string) {
    const productsWithoutRemovedOne = cartProducts.filter(
      (product) => product.id !== productId,
    )

    setCartProducts(productsWithoutRemovedOne)
  }

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        addProductToCart,
        updateProductAmount,
        removeProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
