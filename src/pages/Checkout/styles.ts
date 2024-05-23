import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  max-width: 70rem;
  margin: 2.5rem auto;

  display: grid;
  grid-template-columns: 1fr 28rem;
  gap: 2rem;
  align-items: flex-start;

  section > h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
    font-weight: bold;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 1rem;
  }
`

const Card = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  header {
    display: flex;
    gap: 0.5rem;
  }

  header h2 {
    font-weight: 400;
    font-size: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 1.3;
  }

  header span {
    line-height: 1.3;
    font-size: 0.875rem;
  }
`

export const AddressCard = styled(Card)`
  header svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const PaymentCard = styled(Card)`
  margin-top: 0.75rem;

  header svg {
    color: ${(props) => props.theme.purple};
  }
`

export const AddressForm = styled.form`
  display: grid;

  grid-template:
    'zip . .'
    'street street street'
    'number complement complement'
    'district city state'
    / 1fr 2fr 3.75rem;

  gap: 1rem 0.75rem;

  input {
    background-color: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 4px;
    padding: 0.75rem;

    font-size: 0.875rem;
    line-height: 1.3;

    &:nth-of-type(1) {
      grid-area: zip;
    }
    &:nth-of-type(2) {
      grid-area: street;
    }
    &:nth-of-type(3) {
      grid-area: number;
    }
    &:nth-of-type(4) {
      grid-area: complement;
    }
    &:nth-of-type(5) {
      grid-area: district;
    }
    &:nth-of-type(6) {
      grid-area: city;
    }
    &:nth-of-type(7) {
      grid-area: state;
    }
  }
`
