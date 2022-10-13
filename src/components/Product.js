import styled from 'styled-components'
import { ButtonColor } from './Button'

const ProductStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center ;
  gap: 1rem;
  padding-block-end: 4rem;

  img{
    vertical-align: middle;
  }

  .details{
    text-align: center;
    .name{
      font: var(--body-13-regular);
      color: var(--black);
      margin-block-end: .5rem;
    }

    .price{
      font: var(--body-13-regular);
      color: #1C1B1B80;
    }

  }

  .buttons{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
`

function Product({image, name, price}) {
  return (
    <ProductStyled>
      <img src={image} alt="" width="271" height="271"  />
      <div className='details'>
        <h3 className='name'>{name}</h3>
        <span className='price'>{price}</span>
      </div>
      <div className='buttons'>
        <ButtonColor silver />
        <ButtonColor gold />
      </div>
    </ProductStyled>
    
  )
}

export default Product
