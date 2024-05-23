import { HeaderContainer, HeaderContent } from './styles'
import logoCoffee from '../../assets/logo-coffee-delivery.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const { cartProducts } = useContext(CartContext)

  const numberOfProducts = cartProducts.length
  const isCartEmpty = !numberOfProducts

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
          <NavLink to={!isCartEmpty ? '/checkout' : '/'}>
            {!isCartEmpty && <span>{numberOfProducts}</span>}
            <ShoppingCart size={22} weight="fill" />
          </NavLink>
        </nav>
      </HeaderContent>
    </HeaderContainer>
  )
}
