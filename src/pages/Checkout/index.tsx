import { useState } from 'react'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'

import InputMask from 'react-input-mask'

import {
  AddressCard,
  AddressForm,
  CheckoutContainer,
  PaymentCard,
  SelectPaymentContainer,
  SelectPaymentButton,
} from './styles'
import { Cart } from './components/Cart'

type PaymentMethodsType = 'CREDIT_CARD' | 'DEBIT_CARD' | 'MONEY'

export function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState<
    PaymentMethodsType | undefined
  >(undefined)

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
            <InputMask mask="99999-999" placeholder="CEP" />
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

          <SelectPaymentContainer>
            <SelectPaymentButton
              selected={paymentMethod === 'CREDIT_CARD'}
              onClick={() => setPaymentMethod('CREDIT_CARD')}
            >
              <CreditCard size={16} /> CARTÃO DE CRÉDITO
            </SelectPaymentButton>
            <SelectPaymentButton
              selected={paymentMethod === 'DEBIT_CARD'}
              onClick={() => setPaymentMethod('DEBIT_CARD')}
            >
              <Bank size={16} /> CARTÃO DE DÉBITO
            </SelectPaymentButton>
            <SelectPaymentButton
              selected={paymentMethod === 'MONEY'}
              onClick={() => setPaymentMethod('MONEY')}
            >
              <Money size={16} /> DINHEIRO
            </SelectPaymentButton>
          </SelectPaymentContainer>
        </PaymentCard>
      </section>

      <section>
        <h1>Cafés selecionados</h1>

        <Cart />
      </section>
    </CheckoutContainer>
  )
}
