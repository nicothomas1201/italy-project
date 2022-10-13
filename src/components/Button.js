import styled from 'styled-components'

const ButtonStyled = styled.button`
  color: var(--white);
  padding: .9rem 1.25rem;
  font: var(--body-16-reguar);
  text-transform: uppercase;
  background-color: var(--buttonBG);
  border: 1px solid transparent;
  cursor: pointer;
  /* flex: ${({flex}) => flex} ; */
  /* inline-size: 100% ; */

  ${({primary, uppercase}) => {
    if(!primary){
      return {
        backgroundColor: 'transparent',
        borderColor: 'var(--buttonBG)',
        color: 'var(--buttonBG)',
        font: 'var(--body-12-reguar)',
      }
    }

    if(!uppercase){
      return `
        text-transform: lowercase;
      `
    }
  }}


`

function Button({ text, primary = true, uppercase = true }) {
  return (
    <ButtonStyled uppercase={uppercase} primary={primary}>
      {text}
    </ButtonStyled>
    
  )
}

export const ButtonColor = styled.button`
  block-size: 1.25rem;
  inline-size: 1.25rem;
  border: 3px solid var(--white);
  box-sizing: border-box;
  border-radius: 50%;
  box-shadow: 0px 4px 4px 0px #00000040;
  cursor: pointer;

  ${(props) =>  {
    if(props.silver){
      return`
        background: linear-gradient(231.91deg, #9E9E9E 27.13%, #E4E4E4 80.75%),
        linear-gradient(0deg, #C4C4C4, #C4C4C4),
        linear-gradient(0deg, #FFFFFF, #FFFFFF);
      `
    }

    if(props.gold){
      return `
        background: linear-gradient(0deg, #D6B05E, #D6B05E),
        linear-gradient(312.66deg, #EFD48A 43.37%, #BF9740 70.06%),
        linear-gradient(0deg, #FFFFFF, #FFFFFF);
      `
    }
  }}

`

export const ButtonSimple = styled(ButtonStyled)`
  text-transform: none;
  padding: .375rem .75rem;
  background-color: transparent;

  ${({active}) => {
    if(active){
      return `
        color: var(--black);
        border-color: var(--black);
      `
    }

    return `
      color: #1C1B1B80;
      border-color: #1C1B1B80;
    `
  }}
`

export default Button
