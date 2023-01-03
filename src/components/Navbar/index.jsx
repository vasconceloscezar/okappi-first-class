import { useState } from "react";
import { IconContext } from "react-icons";
import { FaTimes } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import { useLocation, useNavigate } from "react-router-dom";
import { MobileIcon, Nav, NavbarContainer, NavIcon, NavItem, NavLinks, NavLogo, NavMenu } from "./NavbarStyles";
import { data } from "../../data/NavbarData";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const history = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    setShow((prev) => !prev);
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  const closeMenu = (to, id) => {
    if (id && location.pathname === "/") scrollTo(id);
    history.push(to);
    setShow(false);
  };

  return (
    <IconContext.Provider value={{ color: "#ffffff" }}>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon src="./assets/logo.png" />
            Paradeiros
          </NavLogo>
          <MobileIcon onClick={handleClick}>{show ? <FaTimes /> : <CgMenuRight />}</MobileIcon>
          <NavMenu show={show}>
            {data.map((el, index) => (
              <NavItem key={index}>
                <NavLinks onClick={() => closeMenu(el.to, el.id)}>{el.text}</NavLinks>
              </NavItem>
            ))}
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
}
