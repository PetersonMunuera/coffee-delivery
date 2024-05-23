import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'
import { AddToCart, AmountInput, ProductItemContainer, Tags } from './styles'
import { Product } from '../../../../@types/product'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import zod from 'zod'
import { useContext } from 'react'
import { CartContext, CartProduct } from '../../../../contexts/CartContext'

interface ProductItemProps {
  product: Product
}

const addToCartFormSchema = zod.object({
  amount: zod.number().min(1),
})

type AddToCartFormData = zod.infer<typeof addToCartFormSchema>

export function ProductItem({ product }: ProductItemProps) {
  const { register, handleSubmit, setValue, watch, reset } =
    useForm<AddToCartFormData>({
      resolver: zodResolver(addToCartFormSchema),
      defaultValues: {
        amount: 1,
      },
    })

  const { addProductToCart } = useContext(CartContext)

  const amountValue = watch('amount')

  function handleAddToCart(data: AddToCartFormData) {
    const productToAdd: CartProduct = {
      ...product,
      amount: data.amount,
    }

    addProductToCart(productToAdd)
    reset()
  }

  function handleAmount(newAmount: number) {
    if (newAmount < 1) return
    setValue('amount', newAmount)
  }

  return (
    <ProductItemContainer>
      <img src={product.img} alt={`Xícara de café ${product.name}`} />
      <Tags>
        {product.tags.map((tag) => (
          <span key={tag}>{tag.toUpperCase()}</span>
        ))}
      </Tags>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <AddToCart>
        <span>
          R$ <strong>{product.price.toFixed(2)}</strong>
        </span>

        <form onSubmit={handleSubmit(handleAddToCart)}>
          <AmountInput>
            <button type="button" onClick={() => handleAmount(amountValue - 1)}>
              <Minus size={14} />
            </button>
            <input
              {...register('amount', { valueAsNumber: true })}
              type="number"
              min={1}
              required
            />
            <button type="button" onClick={() => handleAmount(amountValue + 1)}>
              <Plus size={14} />
            </button>
          </AmountInput>
          <button type="submit">
            <ShoppingCart size={22} weight="fill" />
          </button>
        </form>
      </AddToCart>
    </ProductItemContainer>
  )
}
