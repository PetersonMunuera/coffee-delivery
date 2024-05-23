import styled from 'styled-components'

import backgroundImg from '../../assets/background-home.svg'

export const InfoSection = styled.section`
  background: url(${backgroundImg});
  background-size: cover;
`

export const Wrapper = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  padding: 5.75rem 0;

  display: flex;
  align-items: center;
  gap: 3.5rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 3rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-title']};
  }

  h2 {
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: 400;
    margin-top: 1rem;
  }
`

export const Benefits = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content;
  gap: 1.25rem;
  margin-top: 4rem;
`

export const Benefit = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    width: 2rem;
    height: 2rem;
    border-radius: 9999px;
    color: ${(props) => props.theme.background};

    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:nth-of-type(1) span {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
  &:nth-of-type(2) span {
    background-color: ${(props) => props.theme['base-text']};
  }
  &:nth-of-type(3) span {
    background-color: ${(props) => props.theme.yellow};
  }
  &:nth-of-type(4) span {
    background-color: ${(props) => props.theme.purple};
  }
`

export const CoffeeSection = styled.section`
  max-width: 70rem;
  margin: 2rem auto;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2.5rem 2rem;
    margin-top: 3.5rem;
    list-style: none;
  }
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
