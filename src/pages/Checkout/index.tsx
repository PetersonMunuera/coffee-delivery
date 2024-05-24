import { useContext } from 'react'
import { Cart } from './components/Cart'
import InputMask from 'react-input-mask'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { CheckoutContext } from '../../contexts/CheckoutContext'

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
  SelectPaymentContainer,
  SelectPaymentButton,
} from './styles'
import { CartContext } from '../../contexts/CartContext'

const addressFormSchema = z.object({
  zip: z.string().min(1),
  street: z.string().min(1),
  number: z.string().min(1),
  complement: z.string().optional(),
  district: z.string().min(1),
  city: z.string().min(1),
  state: z.string().min(1),
})

export type AddressFormDataType = z.infer<typeof addressFormSchema>

export function Checkout() {
  const { saveDeliveryAddress, paymentMethodSelected, selectPaymentMethod } =
    useContext(CheckoutContext)

  const { resetCart } = useContext(CartContext)

  const { register, handleSubmit, reset } = useForm<AddressFormDataType>({
    resolver: zodResolver(addressFormSchema),
  })

  const navigate = useNavigate()

  function handleConfirmOrder(data: AddressFormDataType) {
    if (paymentMethodSelected) {
      saveDeliveryAddress(data)
      resetCart()
      reset()
      navigate('/success')
    }
  }

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

          <AddressForm
            id="address-form"
            onSubmit={handleSubmit(handleConfirmOrder)}
          >
            <InputMask
              {...register('zip')}
              mask="99999-999"
              placeholder="CEP"
            />
            <input {...register('street')} type="text" placeholder="Rua" />
            <input {...register('number')} type="text" placeholder="Número" />
            <div>
              <input
                {...register('complement')}
                type="text"
                placeholder="Complemento"
              />
            </div>
            <input {...register('district')} type="text" placeholder="Bairro" />
            <input {...register('city')} type="text" placeholder="Cidade" />
            <input {...register('state')} type="text" placeholder="UF" />
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
              selected={paymentMethodSelected === 'CREDIT_CARD'}
              onClick={() => selectPaymentMethod('CREDIT_CARD')}
            >
              <CreditCard size={16} /> CARTÃO DE CRÉDITO
            </SelectPaymentButton>
            <SelectPaymentButton
              selected={paymentMethodSelected === 'DEBIT_CARD'}
              onClick={() => selectPaymentMethod('DEBIT_CARD')}
            >
              <Bank size={16} /> CARTÃO DE DÉBITO
            </SelectPaymentButton>
            <SelectPaymentButton
              selected={paymentMethodSelected === 'MONEY'}
              onClick={() => selectPaymentMethod('MONEY')}
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
