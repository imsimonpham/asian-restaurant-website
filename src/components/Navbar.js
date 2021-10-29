import React, { useState, useEffect } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import styled from "styled-components"
import { colors, menu } from "../data/variables"
import { Link } from "gatsby"
import logo from "../assets/logo/1.png"

const Nav = styled.nav`
  background: ${({ active }) => (active ? `${colors.darkish}` : `transparent`)};
  height: ${({ active }) => (active ? `60px` : `120px`)};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  transition: 0.5s all ease;
  opacity: ${({ active }) => (active ? `0.9` : `1`)};
`

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 120px;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  position: relative;
  padding: 0 5%;

  @media screen and (max-width: 900px) {
    justify-content: flex-end;
    padding: 0;
    height: 60px;
  }
`

const NavLogo = styled(Link)`
  color: ${colors.whiteish};
  cursor: pointer;
  margin-right: 2rem;
  position: static;
  width: ${({ active }) => (active ? `35px` : `60px`)};

  @media screen and (max-width: 900px) {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`

const LogoIcon = styled.img`
  width: 100%;
  height: 100%;
`

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 900px) {
    display: block;
    margin-right: 3%;
    font-size: 1.8rem;
    cursor: pointer;
  }
`
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  position: relative;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: 30vh;
    position: absolute;
    z-index: -1;
    top: ${({ click }) => (click ? "100%" : "-1000px")};
    opacity: 1;
    transition: all 0.8s ease;
    background: ${colors.darkish};
    padding-left: 5%;
  }

  @media screen and (max-width: 500px) {
    height: 50vh;
  }
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${colors.whiteish};
  text-transform: uppercase;
  font-weight: 500;
  transition: all 0.5s ease;
  padding: 1rem;

  &:hover {
    color: ${colors.red};
    border-bottom: 1px solid ${colors.red};
  }

  @media screen and (max-width: 900px) {
    text-align: center;
    border-bottom: none !important;
  }
`

const Navbar = () => {
  const [click, setClick] = useState(false)
  const [scroll, setScroll] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  const handleClick = () => {
    setClick(!click)
  }

  console.log(click)

  useEffect(() => {
    changeNav()
    window.addEventListener("scroll", changeNav)
  }, [])

  return (
    <>
      <IconContext.Provider value={{ color: `${colors.whiteish}` }}>
        <Nav active={scroll} click={click}>
          <NavbarContainer>
            <NavLogo to="/" active={scroll}>
              <LogoIcon src={logo} />
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu click={click}>
              {menu.map((item, index) => {
                return (
                  <NavLink
                    key={index}
                    to={item.link}
                    activeStyle={{
                      color: `${colors.red}`,
                      borderBottom: `1px solid ${colors.red}`,
                    }}
                    click={click}
                  >
                    {item.page}
                  </NavLink>
                )
              })}
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
