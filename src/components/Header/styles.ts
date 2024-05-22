import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  background-color: ${(props) => props.theme.background};
`

export const HeaderContent = styled.div`
  max-width: 70rem;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;

  nav {
    display: flex;
    gap: 0.75rem;
  }

  nav span {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    background-color: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme['purple-dark']};
    padding: 0.5rem;
    border-radius: 6px;
    font-size: 0.875rem;
    line-height: 1.3;
  }

  nav span svg {
    color: ${(props) => props.theme.purple};
  }

  nav a {
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 6px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`
