import styled from "styled-components";

export const HeaderSection = styled.div`
  height: 87vh;
  max-width: 1100px;
  margin: auto;
  overflow: hidden;
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  font-family: var(--font-alt);

  h1 {
    color: var(--color-black);
    letter-spacing: 0.04rem;
    @media screen and (max-width: 650px) {
      font-size: 1.2rem;
      letter-spacing: 0;
    }
  }

  p {
    font-size: 1.3rem;
    color: var(--color-gray);
    letter-spacing: 0.04rem;
    margin: 1rem 0;

    @media screen and (max-width: 650px) {
      font-size: 1rem;
      letter-spacing: 0;
    }
  }
`;
