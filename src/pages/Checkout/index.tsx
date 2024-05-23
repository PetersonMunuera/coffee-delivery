import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'
import {
  AddressCard,
  AddressForm,
  CheckoutContainer,
  PaymentCard,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <section>
        <h1>Complete seu pedido</h1>

        <AddressCard>
          <header>
            <MapPinLine size={22} />
            <div>
              <h2>Endereço de entrega</h2>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </header>

          <AddressForm>
            <input type="text" placeholder="CEP" />
            <input type="text" placeholder="Rua" />
            <input type="text" placeholder="Número" />
            <input type="text" placeholder="Complemento" />
            <input type="text" placeholder="Bairro" />
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF" />
          </AddressForm>
        </AddressCard>

        <PaymentCard>
          <header>
            <CurrencyDollar size={22} />
            <div>
              <h2>Pagamento</h2>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </header>

          <div>
            <button>
              <CreditCard /> CARTÃO DE CRÉDITO
            </button>
            <button>
              <Bank /> CARTÃO DE DÉBITO
            </button>
            <button>
              <Money /> DINHEIRO
            </button>
          </div>
        </PaymentCard>
      </section>

      <section>
        <h1>Cafés selecionados</h1>

        <div>Product List</div>
      </section>
    </CheckoutContainer>
  )
}
