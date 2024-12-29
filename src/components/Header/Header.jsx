import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import logo from '../../logo.svg';
import LoginForm from '../Login/LoginForm';

const HeaderContainer = styled.header`
  background-color: #fff;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  opacity: ${props => props.isLoading ? 0 : 1};
  visibility: ${props => props.isLoading ? 'hidden' : 'visible'};
  transition: opacity 0.3s, visibility 0.3s;
`;

const Nav = styled.nav`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  text-align: center;
`;

const LogoImage = styled.img`
  height: 120px;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.h1`
  font-size: 24px;
  margin: 0;
  color: #333;
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;
  z-index: 1002;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: ${props => props.isOpen ? 'fixed' : 'absolute'};
    right: 2rem;
    width: 40px;
    height: 40px;
    color: ${props => props.isOpen ? 'white' : '#333'};
    border: ${props => props.isOpen ? '2px solid white' : 'none'};
    border-radius: 50%;
    transition: all 0.3s ease;
  }
`;

const LoginButton = styled.button`
  padding: 0.5rem 1rem;
  border: 2px solid ${props => props.isMenuOpen ? 'white' : '#333'};
  border-radius: 4px;
  background: transparent;
  color: ${props => props.isMenuOpen ? 'white' : '#333'};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: auto;

  @media (max-width: 768px) {
    margin: 2rem;
    width: calc(100% - 4rem);
    padding: 1rem;
    font-size: 1.1rem;
    order: -1;
  }

  &:hover {
    background: ${props => props.isMenuOpen ? 'white' : '#333'};
    color: ${props => props.isMenuOpen ? 'black' : 'white'};
  }
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.95);
    display: flex;
    flex-direction: column;
    padding: 2rem;
    opacity: ${props => props.isOpen ? 1 : 0};
    pointer-events: ${props => props.isOpen ? 'auto' : 'none'};
    transition: all 0.3s ease;
    z-index: 1001;
    overflow-y: auto;
    overscroll-behavior-y: contain;
    touch-action: pan-y;
    -webkit-overflow-scrolling: touch;

    /* Контейнер для всего содержимого меню */
    & > div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      padding: 4rem 0;
      min-height: calc(100% - 60px); // Высота минус отступ для кнопки
    }
  }

  @media (min-width: 769px) {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    flex-wrap: wrap;
    justify-content: flex-end;
  }
`;

const MenuItem = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  position: relative;
  padding: 0.5rem 0;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    color: white;
    opacity: 0;
    transform: translateX(-20px);
    transition: all 0.3s ease;
    text-align: left;
    padding: 1rem 2rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    width: 100%;
    
    &:last-child {
      border-bottom: none;
    }
    
    ${props => props.isOpen && `
      opacity: 1;
      transform: translateX(0);
      transition-delay: ${props.index * 0.1}s;
    `}

    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }

  @media (min-width: 769px) {
    white-space: nowrap;
    
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: #333;
      transform-origin: bottom right;
      transition: transform 0.3s ease-out;
    }

    &:hover:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
`;

function Header({ isLoading }) {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { title: 'Главная', path: '/' },
    { title: 'Расписание и цены', path: '/schedule' },
    { title: 'Турниры 3х3', path: '/tournaments' },
    { title: 'Наша команда', path: '/team' },
    { title: 'Сборы', path: '/camps' },
    { title: 'Галерея', path: '/gallery' },
    { title: 'Контакты', path: '/contacts' },
    { title: 'Необходимые документы', path: '/documents' },
    { title: 'Партнёры', path: '/partners' },
    { title: 'Атрибутика', path: '/merchandise' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  };

  const handleMenuItemClick = (path) => {
    console.log('Navigating to:', path);
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.touchAction = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.touchAction = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <HeaderContainer isLoading={isLoading}>
      <Nav>
        <Logo>
          <LogoImage src={logo} alt="TRUTKO" />
          <Subtitle>ШКОЛА ХОККЕЙНОЙ ПОДГОТОВКИ</Subtitle>
        </Logo>
        
        <MenuButton isOpen={isMenuOpen} onClick={toggleMenu}>
          {isMenuOpen ? '×' : '☰'}
        </MenuButton>
        
        <MenuContainer isOpen={isMenuOpen}>
          <div>
            <LoginButton 
              isMenuOpen={isMenuOpen}
              onClick={() => {
                setShowLoginForm(true);
                setIsMenuOpen(false);
                document.body.style.overflow = 'auto';
              }}
            >
              Войти
            </LoginButton>
            {menuItems.map((item, index) => (
              <MenuItem 
                key={index}
                index={index}
                isOpen={isMenuOpen}
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuItemClick(item.path);
                }}
                href={item.path}
              >
                {item.title}
              </MenuItem>
            ))}
          </div>
        </MenuContainer>
      </Nav>
      {showLoginForm && <LoginForm onClose={() => setShowLoginForm(false)} />}
    </HeaderContainer>
  );
}

export default Header; 