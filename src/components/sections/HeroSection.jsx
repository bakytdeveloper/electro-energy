import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Button } from '../ui'

const HeroContainer = styled.section`
  height: 80vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
`

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  z-index: 2;
`

const Title = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  background: linear-gradient(90deg, #fff, var(--primary));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  max-width: 600px;
  opacity: 0.9;
`

const EnergyPulse = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(0, 240, 255, 0.4) 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(30px);
  z-index: -1;
  animation: pulse 8s infinite alternate;
`

export default function HeroSection() {
    return (
        <HeroContainer>
            <EnergyPulse style={{ top: '20%', left: '10%' }} />
            <EnergyPulse style={{ bottom: '10%', right: '15%', animationDelay: '2s' }} />

            <HeroContent>
                <Title
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Энергетические решения будущего
                </Title>

                <Subtitle
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    Профессиональные услуги в области электромонтажа и энергетики.
                    Инновационные технологии для стабильного и эффективного энергоснабжения.
                </Subtitle>

                <Button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    Наши услуги
                </Button>
            </HeroContent>
        </HeroContainer>
    )
}