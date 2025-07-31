import styled from "styled-components";

const Nav = styled.nav`
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Menu = styled.div`
  display: flex;
  gap: 1.5rem;
  a {
    color: white;
    font-weight: bold;
    transition: color 0.2s ease;
    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

const Header = () => {
  return (
    <Nav>
      <h1 style={{ marginRight: 30 }}>TAEYEON</h1>
      <Menu>
        <a href="#home">Home</a>
        <a href="#about">About Me</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </Menu>
    </Nav>
  );
};

export default Header;
