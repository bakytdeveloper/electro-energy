import styled from 'styled-components'
import { motion } from 'framer-motion'

const StyledButton = styled(motion.button)`
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  color: var(--dark);
  border: none;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 50px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  font-family: var(--font-main);
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 0 15px rgba(0, 240, 255, 0.5);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: all 0.5s ease;
  }

  &:hover {
    box-shadow: 0 0 25px rgba(0, 240, 255, 0.8);
    transform: translateY(-2px);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(0);
  }
`

export default function Button({ children, ...props }) {
    return <StyledButton {...props}>{children}</StyledButton>
}