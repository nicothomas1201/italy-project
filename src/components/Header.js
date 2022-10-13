import styled from 'styled-components'
import MenuHeader from './Menu-header'

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3.125rem;
  background-color: var(--black);

  .logo{
    font: var(--logo);
    color: var(--white);
    text-transform: uppercase;
    margin: 0;
    
  }

`

function Header() {
  return (
    <HeaderStyled>
      <MenuHeader>
        <span>shop</span>
        <span>blog</span>
        <span>suscribe</span>
      </MenuHeader>

      <h1 className='logo'>italy</h1>

      <MenuHeader>
        <span>search</span>
        <span>account</span>
        <span>cart (0)</span>
      </MenuHeader>
    </HeaderStyled>
    
  )
}

export default Header
