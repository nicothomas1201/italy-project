import styled from 'styled-components'
import Button from './components/Button'
import Product from './components/Product'

const ProductsListStyled = styled.div`
  padding-block-start: 2.5rem;

  .title{
    text-align: center;
    font: var(--body-13-regular);
    color: var(--black);
    margin: 0;
    margin-block-end: 4rem;
  }

  .products-list{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    padding-block-end: 8rem;
  }

`

function ProductsList({ db }) {
  let { accesories } = db ? db : ''

  return (
    <ProductsListStyled>
      <h3 className='title'>SHOP ALL ACCESSORIES</h3>
      <div className='products-list'>
        {db ? accesories.map(({name, image, price}, index) => {
          return <Product image={image} name={name} price={price} key={index} />

        }) : null}
      <Button 
      text="view all acessories"
      uppercase={false}/>
      </div>
    </ProductsListStyled>
    
  )
}

export default ProductsList
