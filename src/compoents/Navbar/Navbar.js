import React from "react";
import { AiFillGithub } from "react-icons/ai";

import { NavbarSection, Heading, Logo } from "./styles";

const Navbar = () => {
  return (
    <>
      <NavbarSection>
        <Heading to="/">Search Github User</Heading>
        <Logo>
          {" "}
          <a
            href="https://github.com/ritagujar"
            rel="noreferrer"
            target="_blank"
          >
            <AiFillGithub />
          </a>
        </Logo>
      </NavbarSection>
    </>
  );
};

export default Navbar;
