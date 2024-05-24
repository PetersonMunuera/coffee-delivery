import { styled } from 'styled-components'

export const CartContainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px 6px 44px;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const ProductsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const ProductItem = styled.article`
  display: flex;
  gap: 1.25rem;

  img {
    width: 4rem;
    height: 4rem;
  }
`

export const ProductInfo = styled.div`
  flex: 1;

  span {
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 1.3;
  }

  & > div {
    display: flex;
    gap: 0.5rem;
    margin-top: 0.5rem;
  }

  button {
  }
`

export const Divider = styled.div`
  margin-top: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  background-color: ${(props) => props.theme['base-button']};
  padding: 0.5rem;
  border: 0;
  border-radius: 6px;

  font-size: 0.75rem;
  line-height: 1.6;

  transition: background 0.1s linear;

  svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme['base-hover']};
  }
`

export const AmountHandler = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  background-color: ${(props) => props.theme['base-button']};
  padding: 0.5rem;
  border: 0;
  border-radius: 6px;

  button {
    display: flex;
    align-items: center;

    background-color: transparent;
    border: 0;
    cursor: pointer;
  }

  button svg {
    color: ${(props) => props.theme.purple};
  }

  button:hover svg {
    color: ${(props) => props.theme['purple-dark']};
  }

  span {
    text-align: center;
    min-width: 1.25rem;
  }
`

export const CartSummary = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    justify-content: space-between;
    line-height: 1.3;
  }

  div span:first-child {
    font-size: 0.875rem;
  }

  div strong {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const ConfirmButton = styled.button`
  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  padding: 0.75rem;
  border: 0;
  border-radius: 6px;

  font-weight: bold;
  line-height: 1.6;

  cursor: pointer;
  transition: background 0.1s linear;

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`
