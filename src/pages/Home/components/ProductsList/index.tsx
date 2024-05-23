import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'
import {
  AddToCart,
  AmountInput,
  CoffeeItem,
  ProductsListContainer,
  Tags,
} from './styles'
import { products } from './products.data'

export function ProductsList() {
  return (
    <ProductsListContainer>
      {products.map((product) => {
        return (
          <li key={product.img}>
            <CoffeeItem>
              <img src={product.img} alt={`Xícara de café ${product.name}`} />
              <Tags>
                {product.tags.map((tag) => (
                  <span key={tag}>{tag.toUpperCase()}</span>
                ))}
              </Tags>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <AddToCart>
                <span>
                  R$ <strong>{product.price.toFixed(2)}</strong>
                </span>

                <form>
                  <AmountInput>
                    <button type="button">
                      <Minus size={14} />
                    </button>
                    <input type="number" min={1} defaultValue={1} />
                    <button type="button">
                      <Plus size={14} />
                    </button>
                  </AmountInput>
                  <button type="submit">
                    <ShoppingCart size={22} weight="fill" />
                  </button>
                </form>
              </AddToCart>
            </CoffeeItem>
          </li>
        )
      })}
    </ProductsListContainer>
  )
}
