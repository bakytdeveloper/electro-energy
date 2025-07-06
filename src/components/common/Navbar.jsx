// import { NavLink } from 'react-router-dom'
// import styled from 'styled-components'
// import { motion, AnimatePresence } from 'framer-motion'
// import { BsLightningChargeFill } from 'react-icons/bs'
// import { List, X } from 'react-bootstrap-icons' // Исправленный импорт
// import { useState } from 'react'
//
// const Nav = styled.nav`
//   background: rgba(10, 10, 26, 0.8);
//   backdrop-filter: blur(10px);
//   border-bottom: 1px solid rgba(0, 240, 255, 0.2);
//   padding: 1.5rem 2rem;
//   position: sticky;
//   top: 0;
//   z-index: 100;
// `
//
// const NavContainer = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `
//
// const Logo = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;
//   font-size: 1.5rem;
//   font-weight: 700;
//   color: var(--primary);
//   text-transform: uppercase;
//   letter-spacing: 2px;
//
//   svg {
//     filter: drop-shadow(var(--neon-glow));
//   }
// `
//
// const NavItems = styled.ul`
//   display: flex;
//   gap: 2rem;
//   list-style: none;
//
//   @media (max-width: 768px) {
//     display: none;
//   }
// `
//
// const NavItem = styled.li``
//
// const StyledLink = styled(NavLink)`
//   color: white;
//   text-decoration: none;
//   position: relative;
//   padding: 0.5rem 0;
//   font-weight: 500;
//   transition: all 0.3s ease;
//
//   &::after {
//     content: '';
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     width: 0;
//     height: 2px;
//     background: var(--primary);
//     transition: width 0.3s ease;
//   }
//
//   &:hover::after {
//     width: 100%;
//   }
//
//   &.active {
//     color: var(--primary);
//     text-shadow: var(--neon-glow);
//
//     &::after {
//       width: 100%;
//     }
//   }
// `
//
// const MobileMenuButton = styled(motion.button)`
//   background: rgba(0, 240, 255, 0.1);
//   border: 1px solid var(--primary);
//   border-radius: 5px;
//   padding: 0.5rem;
//   display: none;
//   z-index: 1000;
//
//   @media (max-width: 768px) {
//     display: block;
//   }
// `
//
// const MobileMenu = styled(motion.div)`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100vh;
//   background: var(--darker);
//   backdrop-filter: blur(10px);
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   gap: 2rem;
//   z-index: 999;
// `
//
// export default function Navbar() {
//     const [isMenuOpen, setIsMenuOpen] = useState(false)
//
//     return (
//         <Nav>
//             <NavContainer>
//                 <Logo>
//                     <BsLightningChargeFill size={24} />
//                     <span>ОсОО Энерго-Экспресс</span>
//                 {/*    */}
//                 </Logo>
//
//                 <NavItems>
//                     <NavItem>
//                         <StyledLink to="/">Главная</StyledLink>
//                     </NavItem>
//                     <NavItem>
//                         <StyledLink to="/services">Услуги</StyledLink>
//                     </NavItem>
//                     <NavItem>
//                         <StyledLink to="/projects">Проекты</StyledLink>
//                     </NavItem>
//                     <NavItem>
//                         <StyledLink to="/contacts">Контакты</StyledLink>
//                     </NavItem>
//                 </NavItems>
//
//                 <MobileMenuButton
//                     onClick={() => setIsMenuOpen(!isMenuOpen)}
//                     whileTap={{ scale: 0.9 }}
//                 >
//                     {isMenuOpen ? <X size={24} /> : <List size={24} />}
//                 </MobileMenuButton>
//
//                 <AnimatePresence>
//                     {isMenuOpen && (
//                         <MobileMenu
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             exit={{ opacity: 0 }}
//                         >
//                             <StyledLink to="/" onClick={() => setIsMenuOpen(false)}>Главная</StyledLink>
//                             <StyledLink to="/services" onClick={() => setIsMenuOpen(false)}>Услуги</StyledLink>
//                             <StyledLink to="/projects" onClick={() => setIsMenuOpen(false)}>Проекты</StyledLink>
//                             <StyledLink to="/contacts" onClick={() => setIsMenuOpen(false)}>Контакты</StyledLink>
//                         </MobileMenu>
//                     )}
//                 </AnimatePresence>
//             </NavContainer>
//         </Nav>
//     )
// }


import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { BsLightningChargeFill } from 'react-icons/bs'
import { List, X } from 'react-bootstrap-icons'
import { useState } from 'react'

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
  white-space: nowrap; /* Добавлено для предотвращения переноса */

  svg {
    filter: drop-shadow(var(--neon-glow));
  }

  @media (max-width: 768px) {
    font-size: 1.2rem; /* Уменьшаем размер шрифта на мобильных */
    span {
      display: inline-block;
      max-width: 260px; /* Ограничиваем ширину текста */
      overflow: hidden;
      //text-overflow: ellipsis; /* Добавляем многоточие если не помещается */
    }
  }

  @media (max-width: 480px) {
    gap: 0.3rem;
    span {
      max-width: 250px;
      margin-right: 8px;
    }
  }
`

const NavItems = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;

  @media (max-width: 768px) {
    display: none;
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

const MobileMenuButton = styled(motion.button)`
  background: rgba(0, 240, 255, 0.3); /* Увеличена прозрачность */
  border: 1px solid var(--primary);
  border-radius: 5px;
  padding: 0.5rem;
  display: none;
  z-index: 1000;
  color: white;
  box-shadow: 0 0 10px rgba(0, 240, 255, 0.5); /* Добавлено свечение */
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 240, 255, 0.4);
    box-shadow: 0 0 15px rgba(0, 240, 255, 0.7);
  }

  @media (max-width: 768px) {
    display: block;
  }
`

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: var(--darker);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  z-index: 999;
`

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <Nav>
            <NavContainer>
                <Logo>
                    <BsLightningChargeFill size={24} />
                    <span>Энерго-Экспресс</span>
                    {/*<span>ОсОО Энерго-Экспресс</span>*/}
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

                <MobileMenuButton
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.05 }}
                >
                    {isMenuOpen ? <X size={24} /> : <List size={24} />}
                </MobileMenuButton>

                <AnimatePresence>
                    {isMenuOpen && (
                        <MobileMenu
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <StyledLink to="/" onClick={() => setIsMenuOpen(false)}>Главная</StyledLink>
                            <StyledLink to="/services" onClick={() => setIsMenuOpen(false)}>Услуги</StyledLink>
                            <StyledLink to="/projects" onClick={() => setIsMenuOpen(false)}>Проекты</StyledLink>
                            <StyledLink to="/contacts" onClick={() => setIsMenuOpen(false)}>Контакты</StyledLink>
                        </MobileMenu>
                    )}
                </AnimatePresence>
            </NavContainer>
        </Nav>
    )
}