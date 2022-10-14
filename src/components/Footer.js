import styled from 'styled-components'
import Button from './Button'
import Icon from './icons'

const FooterStyled = styled.div`
  display: flex;
  background: var(--white);
  padding: 6.25rem 3.125rem;
  flex-direction: column;
  gap: 4rem;
  
  .footer-section{
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    .title{
      font: var(--body-16-regular);
      color: var(--black);
      margin: 0;
    }

    p{
      margin: 0;
      color: #1C1B1B80;
      font: var(--body-13-regular);
    }

    .icons-social{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 1rem;
    }

    .list{
      list-style: none;
      padding: 0;
      margin: 0;
      font: var(--body-13-regular);
      color: #1C1B1B80;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .input{
      padding: .75rem 1.25rem;
      font: var(--body-16-regular);
    }
    .input::placeholder{
      color: #1C1B1B80;
    }
  }

  .design{
    max-inline-size: 19.375rem;
  }
  
  .learn-more{
    max-inline-size: 19.375rem;
  }
  
  .newsletter{
    max-inline-size: 19.375rem;
  }

  @media screen and (min-width: 903px){
    flex-direction: row;
    justify-content: space-between;

  }
`


function Footer() {
  return (
    <FooterStyled>
      <div className='footer-section design'>
        <h3 className='title'>AN EXPERIMENTAL DESIGN MOVEMENT</h3>
        <p>
          Genderless accessories that build upon the framework of global cultural directions.
        </p>
        <div className='icons-social'>
          <Icon color="#1C1B1B80" name="facebook" />
          <Icon color="#1C1B1B80" name="instagram" />
          <Icon color="#1C1B1B80" name="youtube" />
        </div>
        
      </div>

      <div className='footer-section learn-more'>
        <h3 className='title'>LEARN MORE</h3>
        <ul className='list'>
          <li>About</li>
          <li>Gift Cards</li>
          <li>Sizing</li>
          <li>Shipping</li>
          <li>FAQ</li>
          <li>Visit Our Flagship</li>
          <li>Warranty and Exchanges</li>
          <li>Contact</li>
          <li>Careers</li>
          <li>Privacy</li>
          <li>Terms</li>
        </ul>

      </div>

      <div className='footer-section newsletter'>
        <h3 className='title'>NEWSLETTER</h3>
        <p>
          Subscribe to receive updates, access to exclusive deals, and more.
        </p>
        <input className='input' type="text" placeholder="Enter your email adress" />
        <Button text="suscribe" />
      </div>
    </FooterStyled>
    
  )
}

export default Footer
