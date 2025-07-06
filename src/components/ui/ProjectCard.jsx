import styled from 'styled-components';
import { motion } from 'framer-motion';
import imageUrl from '../../../public/assets/images/project-img.jpg';
import ImageLoader from '../ui/ImageLoader';

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 1.5rem;
  border: 1px solid rgba(0, 240, 255, 0.3);
  perspective: 1000px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  
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
      rgba(0, 240, 255, 0.1),
      rgba(0, 240, 255, 0)
    );
    transform: rotate(30deg);
    transition: all 0.5s ease;
  }

  &:hover {
    transform: translateY(-10px) rotateX(5deg) rotateY(5deg);
    box-shadow: 0 15px 30px rgba(0, 240, 255, 0.3);
    
    &::before {
      transform: rotate(30deg) translate(20%, 20%);
    }
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 10px;
  margin-bottom: 1rem;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
`

export default function ProjectCard({ title, description }) {
    return (
        <Card
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300 }}
        >

            <ImageContainer>
                <ImageLoader
                    src={imageUrl || '/src/assets/images/project-placeholder.jpg'}
                    alt={title}
                />
            </ImageContainer>

            <h3>{title}</h3>
            <p>{description}</p>
        </Card>
    )
}