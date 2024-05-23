import styled from 'styled-components'

export const ProductsListContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2.5rem 2rem;
  margin-top: 3.5rem;
  list-style: none;
`

export const CoffeeItem = styled.article`
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 0 36px 0 36px;
  padding: 1.25rem;
  text-align: center;

  img {
    margin-top: -2.5rem;
  }

  div {
    margin-top: 0.75rem;
  }

  div span {
    background-color: ${(props) => props.theme['yellow-light']};
    padding: 0.25rem 0.5rem;
    border-radius: 9999px;

    color: ${(props) => props.theme['yellow-dark']};
    font-weight: bold;
    font-size: 0.625rem;
    line-height: 1.3;

    & + span {
      margin-left: 0.25rem;
    }
  }

  h3 {
    font-family: 'Baloo 2';
    font-size: 1.25rem;
    line-height: 1.3;
    margin-top: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-label']};
  }
`

export const AddToCart = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;

  span {
    line-height: 1.3;
    vertical-align: bottom;
  }

  span strong {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
  }

  form {
    display: flex;
    gap: 0.5rem;

    input {
      width: 4.5rem;
      border: 0;
      border-radius: 6px;
      padding: 0.5rem;
      background-color: ${(props) => props.theme['base-button']};
      text-align: center;
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 2.5rem;
      height: 2.5rem;
      border: 0;
      border-radius: 6px;
      background-color: ${(props) => props.theme['purple-dark']};
      color: ${(props) => props.theme['base-card']};
      cursor: pointer;

      transition: background 0.1s linear;
    }

    button:hover {
      background-color: ${(props) => props.theme.purple};
    }
  }
`
