import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #00f0ff;
    --secondary: #0066ff;
    --dark: #0a0a1a;
    --darker: #050510;
    --neon-glow: 0 0 10px rgba(0, 240, 255, 0.8);
    --font-main: 'Orbitron', 'Segoe UI', sans-serif;
  }

  @font-face {
    font-family: 'Orbitron';
    src: url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');
    font-display: swap;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: linear-gradient(135deg, var(--darker), var(--dark));
    color: white;
    font-family: var(--font-main);
    min-height: 100vh;
    overflow-x: hidden;
    line-height: 1.6;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease;

    &:hover {
      color: var(--primary);
    }
  }

  ul {
    list-style: none;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  ::selection {
    background: var(--primary);
    color: var(--dark);
  }

  /* Анимации */
  @keyframes pulse {
    0% { opacity: 0.6; }
    50% { opacity: 1; }
    100% { opacity: 0.6; }
  }

  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
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
    transition: background 0.3s ease;

    &:hover {
      background: var(--secondary);
    }
  }

  /* Глобальные классы для анимаций */
  .fade-in {
    animation: fadeIn 0.5s ease forwards;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  /* Эффекты для футуристичного стиля */
  .neon-text {
    text-shadow: 0 0 5px var(--primary), 0 0 10px var(--primary);
  }

  .glass-effect {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(0, 240, 255, 0.1);
    border-radius: 12px;
  }
`

export default GlobalStyle