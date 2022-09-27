import styled from "styled-components";

export const InputSection = styled.div`
  @media screen and (max-width: 650px) {
    max-width: 500px;
  }
  /* form {
    display: flex;
    flex-direction: column;
  } */
  input {
    width: 30rem;
    height: 2.7rem;
    margin-right: 0.4rem;
    font-size: 1.1rem;
    font-family: var(--font-alt);
    letter-spacing: 0.04rem;
    outline: none;
    color: var(--color-black);
    border: 1px solid var(--color-gray);
    border-radius: 0.2rem;
    padding-left: 1rem;
    /* width: 100%; */

    @media screen and (max-width: 650px) {
      width: 100%;
    }
  }

  input:focus {
    border: 1px solid var(--color-golden);
  }

  button {
    width: 6.5rem;
    /* width: 100%; */
    height: 2.7rem;
    margin-top: 1rem;
    cursor: pointer;
    border-radius: 0.5rem;
    font-size: 1.5rem;
    font-weight: 800;
    letter-spacing: 0.04rem;
    border: 1px solid var(--color-black);
    outline: none;
    color: var(--color-black);
    font-family: var(--font-base);
    background-color: var(--color-crimson);
    @media screen and (max-width: 650px) {
      width: 100%;
    }
  }

  button:hover {
    background-color: var(--color-golden-light);
  }
`;
