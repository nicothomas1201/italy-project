import styled from 'styled-components'
import ProductCardButton from './Product-card-button'


const BrowseByCategoryStyled = styled.div`
  padding-block-end: 4rem;
  .category{
    display: flex;
    justify-content: space-between;
  }

  .title{
    font: var(--body-13-regular);
    text-transform: uppercase;
    text-align: center;
    margin-block: 4rem;
  }
`

function BrowseByCategory({db}) {
  let { category } = db ? db : ''
  

  return (
    <BrowseByCategoryStyled>
      <h3 className='title'>browse by category</h3>
      <div className='category'>
        { db ? category.map((item, index) => {
          return <ProductCardButton src={item} key={index} />
        }) : <span>Is Loading</span>}
      </div>
    </BrowseByCategoryStyled>
    
  )
}

export default BrowseByCategory
