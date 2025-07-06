import styled from 'styled-components'
import { motion } from 'framer-motion'
import { LightningCharge, Cpu, Gear, Diagram3 } from 'react-bootstrap-icons'

const services = [
    {
        icon: <LightningCharge size={40} />,
        title: "Электромонтаж",
        desc: "Полный цикл работ по монтажу электрооборудования"
    },
    {
        icon: <Cpu size={40} />,
        title: "Наладка",
        desc: "Пуско-наладочные работы любой сложности"
    },
    {
        icon: <Gear size={40} />,
        title: "ЛЭП и подстанции",
        desc: "Строительство линий электропередач"
    },
    {
        icon: <Diagram3 size={40} />,
        title: "Проектирование",
        desc: "Разработка проектно-сметной документации"
    }
]

const HolographicCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 240, 255, 0.2);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      to bottom right,
      rgba(0, 240, 255, 0),
      rgba(0, 240, 255, 0),
      rgba(0, 240, 255, 0.1),
      rgba(0, 240, 255, 0)
    );
    transform: rotate(30deg);
    transition: all 0.5s ease;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0, 240, 255, 0.2);

    &::before {
      transform: rotate(30deg) translate(20%, 20%);
    }
  }
`

export default function ServicesSection() {
    return (
        <section style={{ padding: '5rem 2rem', position: 'relative' }}>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '2rem',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                {services.map((service, index) => (
                    <HolographicCard
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div style={{
                            color: 'var(--primary)',
                            marginBottom: '1rem',
                            filter: 'drop-shadow(0 0 5px rgba(0, 240, 255, 0.5))'
                        }}>
                            {service.icon}
                        </div>
                        <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>{service.title}</h3>
                        <p style={{ opacity: 0.8 }}>{service.desc}</p>
                    </HolographicCard>
                ))}
            </div>
        </section>
    )
}