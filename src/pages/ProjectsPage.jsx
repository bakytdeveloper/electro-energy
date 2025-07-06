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

export default function ProjectsPage() {
    return (
        <>
            <HeroSection title="Наши проекты" />
            <ProjectsGrid>
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </ProjectsGrid>
            <EnergyWave />
        </>
    )
}

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;