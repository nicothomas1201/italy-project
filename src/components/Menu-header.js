import styled from 'styled-components'

const MenuHeaderStyled = styled.div`
  font: var(--body-12-regular);
  color: var(--white);
  text-transform: uppercase;

  display: flex;
  gap: 1.25rem;

  &{
    span{
      cursor: pointer;
    }
  }

  
`

function MenuHeader({children}) {
  return (
    <MenuHeaderStyled>
      {children}
    </MenuHeaderStyled>
    
  )
}

export default MenuHeader
