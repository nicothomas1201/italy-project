import styled from 'styled-components'

const HeroImg = styled.div`

  inline-size: 100%;
  max-inline-size: 45rem; 
  block-size: 23.6875rem;
  /* block-size: 100% ; */
  margin: auto;
  margin-block-end: 8rem;
  background-image: ${({url}) => `url(${url})`};
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
`



export default HeroImg
