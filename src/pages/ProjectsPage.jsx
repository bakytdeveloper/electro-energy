import styled from 'styled-components';
import ProjectCard from '../components/ui/ProjectCard';
import EnergyWave from '../components/ui/EnergyWave';
import HeroSection from "../components/sections/HeroSection";

const projects = [
    {
        title: "Подстанция 110/10 кВ",
        description: "Полный цикл строительства подстанции в Бишкеке"
    },
    {
        title: "ЛЭП 35 кВ",
        description: "Протяженность 15 км в горной местности"
    }
];


const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  min-height: 60vh; /* Фиксированная высота для мобильных */

  @media (max-width: 768px) {
    min-height: 50vh;
    padding: 20px 0;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 1rem;
    gap: 1.5rem;
  }
`;

export default function ProjectsPage() {
    return (
        <>
            <HeroContainer>
                <HeroSection title="Наши проекты" />
            </HeroContainer>
            <ProjectsGrid>
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </ProjectsGrid>
            <EnergyWave />
        </>
    )
}
