import styled, { keyframes } from 'styled-components'

const pulse = keyframes`
  0% { transform: scale(0.8); opacity: 0.5; }
  50% { transform: scale(1.2); opacity: 1; }
  100% { transform: scale(0.8); opacity: 0.5; }
`

const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--darker);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`

const EnergyDot = styled.div`
  width: 20px;
  height: 20px;
  background: var(--primary);
  border-radius: 50%;
  margin: 0 10px;
  animation: ${pulse} 1.5s infinite;
  animation-delay: ${props => props.delay}s;
  box-shadow: 0 0 20px var(--primary);
`

export default function Loader() {
    return (
        <LoaderContainer>
            <EnergyDot delay={0} />
            <EnergyDot delay={0.2} />
            <EnergyDot delay={0.4} />
        </LoaderContainer>
    )
}