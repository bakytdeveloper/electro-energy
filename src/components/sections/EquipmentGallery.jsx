import styled from 'styled-components'
import { motion } from 'framer-motion'

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
`

const GalleryItem = styled(motion.div)`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 240, 255, 0.3);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .caption {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    padding: 1rem;
    transform: translateY(100%);
    transition: transform 0.3s ease;
  }

  &:hover .caption {
    transform: translateY(0);
  }
`

export default function EquipmentGallery({ items }) {
    return (
        <GalleryContainer>
            {items.map((item, index) => (
                <GalleryItem
                    key={index}
                    whileHover={{ scale: 1.03 }}
                >
                    <img src={item.image} alt={item.title} />
                    <div className="caption">
                        <h4>{item.title}</h4>
                    </div>
                </GalleryItem>
            ))}
        </GalleryContainer>
    )
}