import { ShoppingCart } from '@phosphor-icons/react'
import { AddToCart, CoffeeItem, ProductsListContainer } from './styles'
import { products } from './products.data'

export function ProductsList() {
  return (
    <ProductsListContainer>
      {products.map((product) => {
        return (
          <li key={product.img}>
            <CoffeeItem>
              <img src={product.img} alt={`Xícara de café ${product.name}`} />
              <div>
                {product.tags.map((tag) => (
                  <span key={tag}>{tag.toUpperCase()}</span>
                ))}
              </div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <AddToCart>
                <span>
                  R$ <strong>{product.price.toFixed(2)}</strong>
                </span>

                <form>
                  <input type="number" />
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
