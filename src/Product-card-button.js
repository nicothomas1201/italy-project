import styled from 'styled-components'
import Button from './components/Button'

const ProductCardButtonStyled = styled.div`
  display: flex;
  flex-direction: column;
  max-inline-size: 18.625rem;
  align-items: center;
  gap: 1.25rem;
  /* flex-wrap: wrap; */

  .image-container{
    max-inline-size: 18.625rem;
  }

  img{
    vertical-align: middle;
    inline-size: 100%;
    block-size: auto;
    /* aspect-ratio: 10; */
  }

`

function ProductCardButton({src}) {
  return (
    <ProductCardButtonStyled>
      <div className='image-container'>
        <img src={src} alt='' width='298' height='373'  />
      </div>
      <Button text='shop pendants'/>
    </ProductCardButtonStyled>
    
  )
}

export default ProductCardButton
