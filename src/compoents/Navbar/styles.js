import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarSection = styled.div`
  /* width: 100%; */
  display: flex;
  justify-content: space-between;
  padding: 0 4rem;
  height: 3.5rem;
  background-color: var(--color-black);

  @media screen and (max-width: 400px) {
    padding: 0 0.2rem;
  }
`;
export const Heading = styled(Link)`
  color: var(--color-golden);
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 1.5rem;
  letter-spacing: 0.04rem;
  font-family: var(--font-base);
  @media screen and (max-width: 900px) {
    font-size: 1.6rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 1.2rem;
    letter-spacing: 0rem;
  }
`;

export const Logo = styled.p`
  display: flex;
  align-items: center;
  margin-right: 0.5rem;

  a {
    font-size: 1.8rem;
    color: var(--color-golden);
    @media screen and (max-width: 400px) {
      font-size: 1.2rem;
    }
  }
`;
