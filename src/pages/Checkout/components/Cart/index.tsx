import { useContext } from 'react'
import { CartContext } from '../../../../contexts/CartContext'
import { Minus, Plus, Trash } from '@phosphor-icons/react'

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

export function Cart() {
  const { cartProducts, updateProductAmount, removeProduct } =
    useContext(CartContext)

  const deliveryTax = 3.5

  const totalItemsValue = cartProducts.reduce((total, product) => {
    return total + product.amount * product.price
  }, 0)

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  const formattedDeliveryTax = formatter.format(deliveryTax)
  const formattedTotalItemsValue = formatter.format(totalItemsValue)
  const formattedTotalValue = formatter.format(totalItemsValue + deliveryTax)

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
                  {formatter.format(product.price * product.amount)}
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
          <span>{formattedTotalItemsValue}</span>
        </div>
        <div>
          <span>Entrega</span>
          <span>{formattedDeliveryTax}</span>
        </div>
        <div>
          <strong>Total</strong>
          <strong>{formattedTotalValue}</strong>
        </div>
      </CartSummary>
      <ConfirmButton>CONFIRMAR PEDIDO</ConfirmButton>
    </CartContainer>
  )
}
