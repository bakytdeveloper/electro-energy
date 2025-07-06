import styled from 'styled-components'
import { motion } from 'framer-motion'
import Button from "../ui/Button";

const HeroContainer = styled.section`
  height: 100vh;
  min-height: 800px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  isolation: isolate;

  /* Видео-фон */
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -2;
    opacity: 0.4;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 75% 30%, rgba(0, 240, 255, 0.1) 0%, transparent 40%);
    z-index: -1;
  }
`

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  z-index: 2;
  position: relative;

  @media (max-width: 768px) {
    padding: 1rem;
    text-align: center;
  }
`

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  margin-bottom: 1.5rem;
  background: linear-gradient(90deg, #fff, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  //background-clip: text;
  color: transparent;
  line-height: 1.1;
  letter-spacing: 1px;
  text-shadow: 0 0 20px rgba(0, 240, 255, 0.3);
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, var(--primary), transparent);
    border-radius: 3px;
  }

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`

const Subtitle = styled(motion.p)`
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  margin-bottom: 2.5rem;
  max-width: 600px;
  opacity: 0.9;
  line-height: 1.6;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 2rem;
  }
`

const EnergyPulse = styled(motion.div)`
  position: absolute;
  width: min(80vw, 600px);
  height: min(80vw, 600px);
  background: radial-gradient(circle, rgba(0, 240, 255, 0.15) 0%, transparent 60%);
  border-radius: 50%;
  filter: blur(40px);
  z-index: -1;
`

const FloatingGrid = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image:
          linear-gradient(rgba(0, 240, 255, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 240, 255, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
  z-index: -1;
  opacity: 0.5;
`

const EnergyBeam = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(to top, rgba(0, 240, 255, 0.1), transparent);
  clip-path: polygon(0% 100%, 100% 100%, 100% 0%, 90% 0%, 85% 100%, 15% 100%, 10% 0%, 0% 0%);
  z-index: -1;
`

export default function HeroSection() {
    return (
        <HeroContainer>
            {/* Видео-фон с фолбеком */}
            <video autoPlay muted loop playsInline>
                <source src="/public/assets/videos/energy-background.mp4" type="video/mp4" />
                <img src="/public/assets/images/project-img2.jpg" alt="Энергетические системы" />
            </video>

            <FloatingGrid />

            <EnergyPulse
                initial={{ x: '-20%', y: '-20%', scale: 0.8 }}
                animate={{ x: ['-20%', '-15%', '-20%'], y: ['-20%', '-25%', '-20%'], scale: [0.8, 1, 0.8] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />

            <EnergyPulse
                initial={{ x: '60%', y: '50%', scale: 0.6 }}
                animate={{ x: ['60%', '65%', '60%'], y: ['50%', '55%', '50%'], scale: [0.6, 0.8, 0.6] }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                style={{ filter: 'blur(50px)' }}
            />

            <EnergyBeam
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ duration: 2, delay: 1 }}
            />

            <HeroContent>
                <Title
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "backOut" }}
                >
                    Энергетические<br />решения будущего
                </Title>

                <Subtitle
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "backOut" }}
                >
                    Профессиональные услуги в области электромонтажа и энергетики.
                    Инновационные технологии для стабильного и эффективного энергоснабжения.
                </Subtitle>

                <Button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 240, 255, 0.6)' }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 300 }}
                >
                    Наши услуги
                </Button>
            </HeroContent>
        </HeroContainer>
    )
}