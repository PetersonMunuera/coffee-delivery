import { ReactNode, createContext, useState } from 'react'

export type PaymentMethodsType = 'CREDIT_CARD' | 'DEBIT_CARD' | 'MONEY'

interface AddressData {
  zip: string
  street: string
  number: string
  complement?: string
  district: string
  city: string
  state: string
}

interface CheckoutContextType {
  deliveryAddress: AddressData
  paymentMethodSelected: PaymentMethodsType | undefined
  selectPaymentMethod: (method: PaymentMethodsType) => void
  saveDeliveryAddress: (address: AddressData) => void
}

export const CheckoutContext = createContext({} as CheckoutContextType)

interface CheckoutContextProviderProps {
  children: ReactNode
}

export function CheckoutContextProvider({
  children,
}: CheckoutContextProviderProps) {
  const [deliveryAddress, setDeliveryAddress] = useState<AddressData>(
    {} as AddressData,
  )

  const [paymentMethodSelected, setPaymentMethod] = useState<
    PaymentMethodsType | undefined
  >(undefined)

  function saveDeliveryAddress(address: AddressData) {
    setDeliveryAddress(address)
  }

  function selectPaymentMethod(method: PaymentMethodsType) {
    setPaymentMethod(method)
  }

  return (
    <CheckoutContext.Provider
      value={{
        deliveryAddress,
        paymentMethodSelected,
        saveDeliveryAddress,
        selectPaymentMethod,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}
