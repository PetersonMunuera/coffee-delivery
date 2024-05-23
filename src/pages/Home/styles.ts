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
