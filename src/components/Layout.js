import styled from 'styled-components'

const LayoutStyled = styled.div`
  max-inline-size: 79.125rem;
  inline-size: 100%;
  margin: auto;
`

function Layout({children}) {
  return (
    <LayoutStyled>
      {children}
    </LayoutStyled>
    
  )
}

export default Layout
