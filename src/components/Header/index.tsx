import { HeaderContainer, HeaderContent } from './styles'
import logoCoffee from '../../assets/logo-coffee-delivery.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <NavLink to="/">
          <img src={logoCoffee} alt="" />
        </NavLink>

        <nav>
          <span>
            <MapPin size={22} weight="fill" />
            Porto Alegre, RS
          </span>
          <NavLink to="/checkout">
            <ShoppingCart size={22} weight="fill" />
          </NavLink>
        </nav>
      </HeaderContent>
    </HeaderContainer>
  )
}
