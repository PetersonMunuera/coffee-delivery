import { HeaderContainer, HeaderContent } from './styles'
import logoCoffee from '../../assets/logo-coffee-delivery.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoCoffee} alt="" />

        <nav>
          <span>
            <MapPin size={22} weight="fill" />
            Porto Alegre, RS
          </span>
          <a href="#">
            <ShoppingCart size={22} weight="fill" />
          </a>
        </nav>
      </HeaderContent>
    </HeaderContainer>
  )
}
