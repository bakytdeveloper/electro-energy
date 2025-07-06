import styled from 'styled-components';
import { motion } from 'framer-motion';
import { BsLightningChargeFill, BsShieldCheck, BsGearFill } from 'react-icons/bs';
import {Diagram3} from "react-bootstrap-icons";

const Container = styled.section`
  padding: 5rem 2rem;
  background: rgba(5, 5, 16, 0.8);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 70% 20%, rgba(0, 240, 255, 0.05) 0%, transparent 30%);
    pointer-events: none;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 2rem;
  border: 1px solid rgba(0, 240, 255, 0.1);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  min-height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  svg {
    margin-bottom: 1.5rem;
    filter: drop-shadow(0 0 8px rgba(0, 240, 255, 0.5));
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    background: linear-gradient(90deg, #fff, var(--primary));
    -webkit-background-clip: text;
    //background-clip: text;
    color: transparent;
  }

  p {
    opacity: 0.8;
    line-height: 1.6;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0, 240, 255, 0.2);
    border-color: rgba(0, 240, 255, 0.3);

    &::before {
      opacity: 1;
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
            45deg,
            transparent,
            rgba(0, 240, 255, 0.1),
            transparent
    );
    opacity: 0;
    transition: opacity 0.5s ease;
  }
`;

export default function AboutSection() {
    const features = [
        {
            icon: <BsLightningChargeFill size={40} color="#00f0ff" />,
            title: "Инновационные решения",
            description: "Используем передовые технологии в энергетике"
        },
        {
            icon: <BsShieldCheck size={40} color="#00f0ff" />,
            title: "Гарантия качества",
            description: "Сертифицированные специалисты и оборудование"
        },
        {
            icon: <Diagram3 size={40} color="#00f0ff" />,
            title: "Тестирование",
            description: "Тестирование и лабараторные испытания всего оборудования"
        },
        {
            icon: <BsGearFill size={40} color="#00f0ff" />,
            title: "Комплексный подход",
            description: "От проектирования до ввода в эксплуатацию"
        }
    ];


    return (
        <Container>
            <Grid>
                {features.map((feature, index) => (
                    <FeatureCard
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: index * 0.1,
                            type: "spring",
                            stiffness: 100
                        }}
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {feature.icon}
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </FeatureCard>
                ))}
            </Grid>
        </Container>
    );
}