import { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { FaTimes } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import { useLocation, useNavigate } from "react-router-dom";
import { MobileIcon, Nav, NavbarContainer, NavIcon, NavItem, NavLinks, NavLogo, NavMenu } from "./NavbarStyles";
import { navbarData, companyData } from "../../data";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
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
    navigate(to);
    setShow(false);
  };

  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "visible";
  }, [show]);

  return (
    <IconContext.Provider value={{ color: "#ffffff" }}>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon src="./assets/logo.png" />
            {companyData.name}
          </NavLogo>
          <MobileIcon onClick={handleClick}>{show ? <FaTimes /> : <CgMenuRight />}</MobileIcon>
          <NavMenu show={show}>
            {navbarData.map((el, index) => (
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
