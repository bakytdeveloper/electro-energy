import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  body {
    background: #f5f5f5;
    color: #333;
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  :root {
    --primary: #00f0ff;
    --secondary: #0066ff;
    --dark: #0a0a1a;
    --darker: #050510;
    --neon-glow: 0 0 10px rgba(0, 240, 255, 0.8);
    --font-main: 'Orbitron', 'Segoe UI', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Orbitron';
    src: url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');
  }

  body {
    background: linear-gradient(135deg, var(--darker), var(--dark));
    color: white;
    font-family: var(--font-main);
    min-height: 100vh;
    overflow-x: hidden;
  }

  ::selection {
    background: var(--primary);
    color: var(--dark);
  }

  /* Анимация энергетического пульса */
  @keyframes pulse {
    0% { opacity: 0.6; }
    50% { opacity: 1; }
    100% { opacity: 0.6; }
  }

  /* Стили для скроллбара */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--dark);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--primary);
    border-radius: 4px;
  }
`

export default GlobalStyle