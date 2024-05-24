import { useState } from 'react'
import { Cart } from './components/Cart'
import InputMask from 'react-input-mask'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
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

type PaymentMethodsType = 'CREDIT_CARD' | 'DEBIT_CARD' | 'MONEY'

const addressFormSchema = z.object({
  zip: z.string().min(1),
  street: z.string().min(1),
  number: z.number().min(1),
  complement: z.string(),
  district: z.string().min(1),
  city: z.string().min(1),
  state: z.string().min(1),
})

type AddressFormDataType = z.infer<typeof addressFormSchema>

export function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState<
    PaymentMethodsType | undefined
  >(undefined)

  const { register } = useForm<AddressFormDataType>({
    resolver: zodResolver(addressFormSchema),
  })

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
            <InputMask
              {...register('zip')}
              mask="99999-999"
              placeholder="CEP"
            />
            <input {...register('street')} type="text" placeholder="Rua" />
            <input {...register('number')} type="text" placeholder="Número" />
            <input
              {...register('complement')}
              type="text"
              placeholder="Complemento"
            />
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
