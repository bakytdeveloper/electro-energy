import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from './Navbar'
// import Footer from './Footer'

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const MainContent = styled.main`
  flex: 1;
  padding: 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 20% 30%, rgba(0, 240, 255, 0.1) 0%, transparent 40%);
    pointer-events: none;
    z-index: -1;
  }
`

export default function Layout() {
    return (
        <LayoutContainer>
            <Navbar />
            <MainContent>
                <Outlet />
            </MainContent>
            {/*<Footer />*/}
        </LayoutContainer>
    )
}