import { createGlobalStyle } from 'styled-components'
import theme from './theme'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Noto Sans KR', sans-serif;
    src: url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;&family=Song+Myung&display=swap"') format('woff');
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
    color: ${theme.color.black};

    &::-webkit-scrollbar {
      display: none; 
    }
  }

  button{
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`

export default GlobalStyle
