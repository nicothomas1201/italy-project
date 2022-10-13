import styled from 'styled-components'

const HeroStyled = styled.div`
  background: ${(props) => `url(${props.url})`};
  /* inline-size: 100vw; */
  block-size: 30.8125rem;
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  overflow: hidden;
`

function Hero({ url }) {
  return (
    <HeroStyled url={url}>
    </HeroStyled>
    
  )
}

export default Hero
