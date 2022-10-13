import styled from 'styled-components'
import Button from './components/Button'

const ProductCardButtonStyled = styled.div`
  display: flex;
  flex-direction: column;
  max-inline-size: 18.625rem;
  align-items: center;
  gap: 1.25rem;

`

function ProductCardButton({src}) {
  return (
    <ProductCardButtonStyled>
      <img src={src} alt='' width='298' height='373'  />
      <Button text='shop pendants'/>
    </ProductCardButtonStyled>
    
  )
}

export default ProductCardButton
