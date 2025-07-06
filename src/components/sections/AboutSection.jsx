import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Bolt, ShieldCheck, Cog } from 'react-bootstrap-icons'

const Container = styled.section`
  padding: 5rem 2rem;
  background: rgba(5, 5, 16, 0.8);
  position: relative;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`

const FeatureCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 2rem;
  border: 1px solid rgba(0, 240, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0, 240, 255, 0.2);
  }
`

export default function AboutSection() {
    return (
        <Container>
            <Grid>
                <FeatureCard whileHover={{ scale: 1.05 }}>
                    <Bolt size={40} color="#00f0ff" />
                    <h3>Инновационные решения</h3>
                    <p>Используем передовые технологии в энергетике</p>
                </FeatureCard>

                <FeatureCard whileHover={{ scale: 1.05 }}>
                    <ShieldCheck size={40} color="#00f0ff" />
                    <h3>Гарантия качества</h3>
                    <p>Сертифицированные специалисты и оборудование</p>
                </FeatureCard>

                <FeatureCard whileHover={{ scale: 1.05 }}>
                    <Cog size={40} color="#00f0ff" />
                    <h3>Комплексный подход</h3>
                    <p>От проектирования до ввода в эксплуатацию</p>
                </FeatureCard>
            </Grid>
        </Container>
    )
}
