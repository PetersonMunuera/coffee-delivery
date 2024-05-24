import styled from 'styled-components'

export const SuccessContainer = styled.main`
  max-width: 70rem;
  margin: 5rem auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

export const CheckoutSection = styled.section`
  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    line-height: 1.3;
    color: ${(props) => props.theme['yellow-dark']};
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const CheckoutInfoCard = styled.div`
  padding: 2.5rem;
  position: relative;
  margin-top: 2.5rem;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 6px 36px 6px 36px;
    padding: 1px;
    background: linear-gradient(
      135deg,
      ${(props) => props.theme.yellow},
      ${(props) => props.theme.purple}
    );
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`

export const CheckoutInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  & + div {
    margin-top: 2rem;
  }

  & div {
    width: 2rem;
    height: 2rem;
    border-radius: 9999px;
    color: ${(props) => props.theme.background};

    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:nth-of-type(1) div {
    background-color: ${(props) => props.theme.purple};
  }
  &:nth-of-type(2) div {
    background-color: ${(props) => props.theme.yellow};
  }
  &:nth-of-type(3) div {
    background-color: ${(props) => props.theme['yellow-dark']};
  }

  p span {
    display: block;
    line-height: 1.3;
  }
`
