import styled from 'styled-components'
import Button, { ButtonColor, ButtonSimple } from './components/Button'

const HeroProductStyled = styled.div`
  max-inline-size: 55.0625rem;
  inline-size: 100%;
  margin: auto;
  padding-block-end: 4.8125rem;
  padding-block-start: 4.8125rem;
  display: flex;
  gap: 5rem;


  .product-image{
    max-inline-size: 25rem;
    inline-size: 100%;
    block-size: auto;
    img{
      vertical-align: middle;
      inline-size: 100%;
      block-size: auto;
      aspect-ratio: 1/1;
    }
  }

  .product-details{
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    align-items: center;

    .product-titles{
      .title{
        margin: 0;
        margin-block-end: 1rem;
        font: var(--body-16-regular);
        text-align: center;
      }
      .price{
        margin: 0;
        text-align: center ;
        font: var(--body-16-regular);
        color: #1C1B1B80;
      }
    }

    .paragraph{
      font: var(--paragraph-12);
      text-align: center;
      margin: 0;
    }

    span{
      font: var(--body-13-regular);
    }

    .select-color{
      .color-title{
        color: #1C1B1B80;
        margin-block-end: .25rem;
        display: inline-block ;
      }

      .color-buttons{
        display: flex;
        justify-content: center;
        gap: 1rem;

        button{
          inline-size: 1.25rem;
        }
      }

    }

    .size{
      text-align: center;
      .size-title{
        color: #1C1B1B80;
        margin-block-end: .25rem;
        display: inline-block ;
      }

      .size-buttons{
        display: flex;
        gap: 1rem;
      }
    }

    button{
      inline-size: 100%;
    }

    .view-products{
      color: var(--black);
    }
  }




  

  

`

function HeroProduct({ db }) {
  let { productHero } = db ? db : ''

  return (
    <HeroProductStyled>
      <div className='product-image'>
        <img src={productHero} width="400" height="400"  alt="" />
      </div>

      <div className='product-details'>
        <div className='product-titles'>
          <h3 className='title'> NEW THIS WEEK — THE FEEDBACK </h3>
          <h3 className='price'>$80</h3>
        </div>
        <p className='paragraph'>
          The Feedback is a sleek, contemporary ear cuff inspired by cybernetics and 
          robotics design. The upper and lower components are joined by a soldered bracket
          that attaches over the back of the ear. No piercing necessary.
        </p>
        <span>Eric wears size large. Sadie wears size small.</span>
        <span>Materials: Stainless Steel</span>
        <div className='select-color'>
          <span className='color-title'>COLOUR: GOLD</span>
          <div className='color-buttons'>
            <ButtonColor silver />
            <ButtonColor gold />
          </div>
        </div>

        <div className='size'>
          <span className='size-title'>SIZE:</span>
          <div className='size-buttons'>
            <ButtonSimple active={true}>
              Small
            </ButtonSimple>
            <ButtonSimple active={false}>
              Large
            </ButtonSimple>
          </div>
        </div>

        <Button
          text="add to cart"
          uppercase={false}/>

        <a className='view-products' href='/'>View product details</a>
      </div>


    </HeroProductStyled>
    
  )
}

export default HeroProduct
