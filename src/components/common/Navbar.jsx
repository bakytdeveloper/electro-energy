import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { LightningChargeFill } from 'react-icons/bs'

const Nav = styled.nav`
  background: rgba(10, 10, 26, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 240, 255, 0.2);
  padding: 1.5rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
`

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 2px;

  svg {
    filter: drop-shadow(var(--neon-glow));
  }
`

const NavItems = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;

  @media (max-width: 768px) {
    display: none; /* Пока скроем, потом сделаем бургер-меню */
  }
`

const NavItem = styled.li``

const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  position: relative;
  padding: 0.5rem 0;
  font-weight: 500;
  transition: all 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--primary);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  &.active {
    color: var(--primary);
    text-shadow: var(--neon-glow);

    &::after {
      width: 100%;
    }
  }
`

export default function Navbar() {
    return (
        <Nav>
            <NavContainer>
                <Logo>
                    <LightningChargeFill size={24} />
                    <span>ElectroEnergy</span>
                </Logo>

                <NavItems>
                    <NavItem>
                        <StyledLink to="/">Главная</StyledLink>
                    </NavItem>
                    <NavItem>
                        <StyledLink to="/services">Услуги</StyledLink>
                    </NavItem>
                    <NavItem>
                        <StyledLink to="/projects">Проекты</StyledLink>
                    </NavItem>
                    <NavItem>
                        <StyledLink to="/contacts">Контакты</StyledLink>
                    </NavItem>
                </NavItems>

                {/* Пока оставим место для мобильного меню */}
            </NavContainer>
        </Nav>
    )
}