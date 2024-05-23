import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import coffeeMainImg from '../../assets/coffee-main.png'
import {
  InfoSection,
  Wrapper,
  Benefits,
  Benefit,
  CoffeeSection,
  CoffeeItem,
  AddToCart,
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
          <li>
            <CoffeeItem>
              <img src="expresso-tradicional.png" alt="Xícara de café" />
              <div>
                <span>TRADICIONAL</span>
                <span>COM LEITE</span>
              </div>
              <h3>Expresso Tradicional</h3>
              <p>O tradicional café feito com água quente e grãos moídos</p>
              <AddToCart>
                <span>
                  R$ <strong>9,90</strong>
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
          <li>
            <CoffeeItem>
              <img src="expresso-tradicional.png" alt="Xícara de café" />
              <div>
                <span>TRADICIONAL</span>
                <span>COM LEITE</span>
              </div>
              <h3>Expresso Tradicional</h3>
              <p>O tradicional café feito com água quente e grãos moídos</p>
              <AddToCart>
                <span>
                  R$ <strong>9,90</strong>
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
          <li>
            <CoffeeItem>
              <img src="expresso-tradicional.png" alt="Xícara de café" />
              <div>
                <span>TRADICIONAL</span>
                <span>COM LEITE</span>
              </div>
              <h3>Expresso Tradicional</h3>
              <p>O tradicional café feito com água quente e grãos moídos</p>
              <AddToCart>
                <span>
                  R$ <strong>9,90</strong>
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
          <li>
            <CoffeeItem>
              <img src="expresso-tradicional.png" alt="Xícara de café" />
              <div>
                <span>TRADICIONAL</span>
                <span>COM LEITE</span>
              </div>
              <h3>Expresso Tradicional</h3>
              <p>O tradicional café feito com água quente e grãos moídos</p>
              <AddToCart>
                <span>
                  R$ <strong>9,90</strong>
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
          <li>
            <CoffeeItem>
              <img src="expresso-tradicional.png" alt="Xícara de café" />
              <div>
                <span>TRADICIONAL</span>
                <span>COM LEITE</span>
              </div>
              <h3>Expresso Tradicional</h3>
              <p>O tradicional café feito com água quente e grãos moídos</p>
              <AddToCart>
                <span>
                  R$ <strong>9,90</strong>
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
          <li>
            <CoffeeItem>
              <img src="expresso-tradicional.png" alt="Xícara de café" />
              <div>
                <span>TRADICIONAL</span>
                <span>COM LEITE</span>
              </div>
              <h3>Expresso Tradicional</h3>
              <p>O tradicional café feito com água quente e grãos moídos</p>
              <AddToCart>
                <span>
                  R$ <strong>9,90</strong>
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
          <li>
            <CoffeeItem>
              <img src="expresso-tradicional.png" alt="Xícara de café" />
              <div>
                <span>TRADICIONAL</span>
                <span>COM LEITE</span>
              </div>
              <h3>Expresso Tradicional</h3>
              <p>O tradicional café feito com água quente e grãos moídos</p>
              <AddToCart>
                <span>
                  R$ <strong>9,90</strong>
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
        </ul>
      </CoffeeSection>
    </main>
  )
}
