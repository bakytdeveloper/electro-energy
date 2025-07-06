import { useState } from 'react';
import styled from 'styled-components';

const LoaderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.5s ease;
  opacity: ${({ loaded }) => (loaded ? 1 : 0)};
`;

const Placeholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #0a0a1a, #1a1a2e, #0a0a1a);
  background-size: 200% 200%;
  animation: gradient 2s ease infinite;
  
  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

export default function ImageLoader({ src, alt, ...props }) {
    const [loaded, setLoaded] = useState(false);

    return (
        <LoaderContainer>
            {!loaded && <Placeholder />}
            <StyledImage
                src={src}
                alt={alt}
                loaded={loaded ? 1 : 0}
                onLoad={() => setLoaded(true)}
                {...props}
            />
        </LoaderContainer>
    );
}