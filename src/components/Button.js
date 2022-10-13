import styled from 'styled-components'

const ButtonStyled = styled.button`
  color: var(--white);
  padding: .9rem 1.25rem;
  font: var(--body-16-reguar);
  text-transform: uppercase;
  background-color: var(--buttonBG);
  border: 1px solid transparent;
  cursor: pointer;

  ${({primary}) => {
    if(!primary){
      return {
        backgroundColor: 'transparent',
        borderColor: 'var(--buttonBG)',
        color: 'var(--buttonBG)',
        font: 'var(--body-12-reguar)',
      }
    }
  }}


`

function Button({text, primary = true}) {
  return (
    <ButtonStyled primary={primary}>
      {text}
    </ButtonStyled>
    
  )
}

export default Button
