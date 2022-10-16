import styled from 'styled-components'

const MenuHeaderMobileStyled = styled.div`
  position: absolute;
  /* z-index: 10; */
  top: 3.5rem;
  /* border: 1px solid red; */
  /* inset: 0; */
  left: 0;
  right: 0;
  block-size: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  transition: .3s block-size linear;
  background: var(--black);
  overflow: hidden;
  color: var(--white);
  /* margin-block-start: 2rem; */

  ${({isActive}) => {
    if(isActive){
      return 'block-size: 40rem'
    }
  }}
`

function MenuHeaderMobile({ isActive }) {
  return (
    <MenuHeaderMobileStyled isActive={isActive}>
      <span>SHOP</span>
      <span>BLOG</span>
      <span>SUBSCRIBE</span>
      <span>SEARCH</span>
      <span>ACCOUNT</span>
    </MenuHeaderMobileStyled>
    
  )
}

export default MenuHeaderMobile
