import { useContext } from 'react'
import { CheckoutContext } from '../../contexts/CheckoutContext'

export function Success() {
  const { deliveryAddress, paymentMethodSelected } = useContext(CheckoutContext)

  return (
    <div>
      <pre>{JSON.stringify(deliveryAddress, null, 2)}</pre>

      <span>{paymentMethodSelected}</span>
    </div>
  )
}
