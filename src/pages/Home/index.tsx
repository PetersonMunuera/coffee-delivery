import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { ProductItem } from './components/ProductItem'
import { products } from './products.data'

import coffeeMainImg from '../../assets/coffee-main.png'
import {
  InfoSection,
  Wrapper,
  Benefits,
  Benefit,
  CoffeeSection,
} from './styles'

export function Home() {
  return (
    <main>
      <InfoSection>
        <Wrapper>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h2>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </h2>

            <Benefits>
              <Benefit>
                <span>
                  <ShoppingCart width={16} weight="fill" />
                </span>
                Compra simples e segura
              </Benefit>
              <Benefit>
                <span>
                  <Package width={16} weight="fill" />
                </span>
                Embalagem mantém o café intacto
              </Benefit>
              <Benefit>
                <span>
                  <Timer width={16} weight="fill" />
                </span>
                Entrega rápida e rastreada
              </Benefit>
              <Benefit>
                <span>
                  <Coffee width={16} weight="fill" />
                </span>
                O café chega fresquinho até você
              </Benefit>
            </Benefits>
          </div>

          <img src={coffeeMainImg} alt="Copo de café com fundo amarelo" />
        </Wrapper>
      </InfoSection>

      <CoffeeSection>
        <h2>Nossos cafés</h2>

        <ul>
          {products.map((product) => {
            return (
              <li key={product.id}>
                <ProductItem product={product} />
              </li>
            )
          })}
        </ul>
      </CoffeeSection>
    </main>
  )
}
