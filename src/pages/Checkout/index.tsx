import { MapPinLine } from '@phosphor-icons/react'
import { CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <section>
        <h1>Complete seu pedido</h1>
        <form>
          <div>
            <MapPinLine />
            <div>
              <h2>Endereço de entrega</h2>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </div>
        </form>
      </section>
      <aside>Cart Resume</aside>
    </CheckoutContainer>
  )
}
