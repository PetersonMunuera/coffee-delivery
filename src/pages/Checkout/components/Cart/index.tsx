import { useContext } from 'react'
import {
  AmountHandler,
  CartContainer,
  CartSummary,
  ConfirmButton,
  Divider,
  ProductInfo,
  ProductItem,
  ProductsList,
  RemoveButton,
} from './styles'
import { CartContext } from '../../../../contexts/CartContext'
import { Minus, Plus, Trash } from '@phosphor-icons/react'

export function Cart() {
  const { cartProducts, updateProductAmount, removeProduct } =
    useContext(CartContext)

  const deliveryTax = 3.5

  const totalValue = cartProducts.reduce((total, product) => {
    return total + product.amount * product.price
  }, 0)

  return (
    <CartContainer>
      <ProductsList>
        {cartProducts.map((product) => {
          return (
            <li key={product.id}>
              <ProductItem>
                <img src={product.img} alt="Xícara de café" />
                <ProductInfo>
                  <span>{product.name}</span>
                  <div>
                    <AmountHandler>
                      <button
                        onClick={() =>
                          updateProductAmount(product.id, product.amount - 1)
                        }
                      >
                        <Minus />
                      </button>
                      <span>{product.amount}</span>
                      <button
                        onClick={() =>
                          updateProductAmount(product.id, product.amount + 1)
                        }
                      >
                        <Plus />
                      </button>
                    </AmountHandler>
                    <RemoveButton onClick={() => removeProduct(product.id)}>
                      <Trash size={16} />
                      REMOVER
                    </RemoveButton>
                  </div>
                </ProductInfo>
                <strong>
                  R$ {(product.price * product.amount).toFixed(2)}
                </strong>
              </ProductItem>
              <Divider />
            </li>
          )
        })}
      </ProductsList>
      <CartSummary>
        <div>
          <span>Total de itens</span>
          <span>R$ {totalValue.toFixed(2)}</span>
        </div>
        <div>
          <span>Entrega</span>
          <span>R$ {deliveryTax.toFixed(2)}</span>
        </div>
        <div>
          <strong>Total</strong>
          <strong>R$ {(totalValue + deliveryTax).toFixed(2)}</strong>
        </div>
      </CartSummary>
      <ConfirmButton>CONFIRMAR PEDIDO</ConfirmButton>
    </CartContainer>
  )
}
