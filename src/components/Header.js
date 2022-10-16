import styled from 'styled-components'
import MenuHeader from './Menu-header'
import MenuHeaderMobile from './Menu-header-mobile'
import { useState } from 'react'

const HeaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 3.125rem;
  background-color: var(--black);
  /* position: relative; */

  .logo{
    font: var(--logo);
    color: var(--white);
    text-transform: uppercase;
    margin: 0;
    order: -1;
  }

  & div:nth-child(1){
    order: -1;
  }

  @media screen and (min-width: 536px){
    justify-content: space-between;

  }

`

function Header() {
  let [ isActive, setIsActive ] = useState(false)
  let mediaQuery = window.matchMedia("(min-width: 536px)")

  function handleTouch(){
    if(!isActive){
      return setIsActive(true)
    }

    return setIsActive(false)
  }
  
  

  return (
    <HeaderStyled>
      {mediaQuery.matches ? (
        <>
          <MenuHeader>
            <span>shop</span>
            <span>blog</span>
            <span>suscribe</span>
          </MenuHeader>


          <MenuHeader>
            <span>search</span>
            <span>account</span>
            <span>cart (0)</span>
          </MenuHeader>
        </>
      ) : <MenuHeaderMobile  isActive={isActive} />}

      

      <h1 onTouchStart={handleTouch} className='logo'>italy</h1>
      
    </HeaderStyled>
    
  )
}

export default Header
