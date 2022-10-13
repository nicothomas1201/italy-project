import { createGlobalStyle } from "styled-components";

const GlobalSyles = createGlobalStyle`
  :root{
    --black: #1c1b1b; 
    --white: #ffffff; 
    --background: #F1F1F1;
    --logo: 400 1.4375rem/1.5rem 'Bebas Neue'; 
    --body-16-regular: 400 1rem/1rem Inter; 
    --body-13-regular: 400 0.8125rem/normal Inter; 
    --body-12-bold: 600 0.75rem/normal Inter; 
    --body-12-regular: 400 0.75rem/normal Inter; 
    --body-10-regular: 400 0.625rem/1rem Inter; 
    --body-24-regular: 400 1.5rem/normal Inter; 
    --paragraph-12: 400 0.8125rem/1.5rem Inter; 
    --buttonBG: #1C1B1B; 
  }

  body{
    margin: 0;
    font: var(--body-16-regular);
    color: var(--black);
    background: var(--background);
  }
`

export default GlobalSyles