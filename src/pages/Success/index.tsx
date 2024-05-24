import { useContext } from 'react'
import { CheckoutContext } from '../../contexts/CheckoutContext'
import { MapPin, Timer } from '@phosphor-icons/react'

import deliveryIllustration from '../../assets/delivery-illustration.svg'
import {
  CheckoutInfo,
  CheckoutInfoCard,
  CheckoutSection,
  SuccessContainer,
} from './styles'

export function Success() {
  const { deliveryAddress, paymentMethodSelected } = useContext(CheckoutContext)

  const paymentLabel = {
    CREDIT_CARD: 'Cartão de Crédito',
    DEBIT_CARD: 'Cartão de Débito',
    MONEY: 'Dinheiro',
  }

  return (
    <SuccessContainer>
      <CheckoutSection>
        <header>
          <h1>Uhu! Pedido confirmado</h1>
          <h2>Agora é só aguardar que logo o café chegará até você</h2>
        </header>

        <CheckoutInfoCard>
          <CheckoutInfo>
            <div>
              <MapPin size={16} weight="fill" />
            </div>
            <p>
              <span>
                Entrega em <strong>{deliveryAddress.street}</strong>,{' '}
                {deliveryAddress.number}
              </span>
              <span>
                {deliveryAddress.district} - {deliveryAddress.city},{' '}
                {deliveryAddress.state}
              </span>
            </p>
          </CheckoutInfo>

          <CheckoutInfo>
            <div>
              <Timer size={16} weight="fill" />
            </div>
            <p>
              <span>Previsão de entrega</span>
              <strong>20 min - 30 min</strong>
            </p>
          </CheckoutInfo>

          <CheckoutInfo>
            <div>
              <MapPin size={16} weight="fill" />
            </div>
            <p>
              <span>Pagamento na entrega</span>
              <strong>{paymentLabel[paymentMethodSelected]}</strong>
            </p>
          </CheckoutInfo>
        </CheckoutInfoCard>
      </CheckoutSection>
      <img
        src={deliveryIllustration}
        alt="Homem em moto à caminho de uma entrega"
      />
    </SuccessContainer>
  )
}
